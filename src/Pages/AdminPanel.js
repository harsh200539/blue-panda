import React, { useEffect, useMemo, useState } from 'react';
import { adminService } from '../services/api';
import { BLOG_CATEGORIES } from '../config/blog-categories';
import './AdminPanel.css';

const RESOURCE_CONFIG = {
  'site-content': {
    label: 'Site Content',
    identifier: 'key',
    title: (item) => item.key,
    subtitle: (item) => item.section,
    fields: [
      { name: 'key', label: 'Content key', required: true },
      { name: 'section', label: 'Section', required: true },
      { name: 'value', label: 'Value', type: 'textarea', required: true },
      { name: 'is_html', label: 'Contains HTML', type: 'checkbox' },
    ],
  },
  services: {
    label: 'Services',
    identifier: 'id',
    title: (item) => item.title,
    subtitle: (item) => `Display order: ${item.order}`,
    fields: [
      { name: 'title', label: 'Title', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'image', label: 'Image', type: 'file' },
      { name: 'image_url', label: 'External image URL' },
      { name: 'order', label: 'Display order', type: 'number', required: true },
    ],
  },
  testimonials: {
    label: 'Testimonials',
    identifier: 'id',
    title: (item) => item.name,
    subtitle: (item) => item.position || `${item.rating}/5 rating`,
    fields: [
      { name: 'name', label: 'Name', required: true },
      { name: 'position', label: 'Position' },
      { name: 'text', label: 'Testimonial', type: 'textarea', required: true },
      { name: 'avatar', label: 'Avatar', type: 'file' },
      { name: 'rating', label: 'Rating', type: 'number', required: true, min: 1, max: 5 },
    ],
  },
  blogs: {
    label: 'Blogs',
    identifier: 'slug',
    title: (item) => item.title,
    subtitle: (item) => `${item.category} · ${item.is_published ? 'Published' : 'Draft'}`,
    fields: [
      { name: 'title', label: 'Title', required: true },
      { name: 'slug', label: 'Slug (leave blank to generate)' },
      { name: 'author', label: 'Author', required: true },
      { name: 'category', label: 'Category', type: 'select', options: BLOG_CATEGORIES, required: true },
      { name: 'description', label: 'Short description', type: 'textarea', required: true },
      { name: 'content', label: 'Article HTML', type: 'textarea', required: true, className: 'admin-editor' },
      { name: 'image', label: 'Featured image', type: 'file', required: true },
      { name: 'is_published', label: 'Published', type: 'checkbox' },
      { name: 'meta_title', label: 'SEO title' },
      { name: 'meta_description', label: 'SEO description', type: 'textarea' },
      { name: 'keywords', label: 'SEO keywords' },
    ],
  },
};

const emptyValues = (fields) => fields.reduce((values, field) => ({
  ...values,
  [field.name]: field.type === 'checkbox' ? false : '',
}), {});

const responseMessage = (error) => {
  const data = error.response?.data;
  if (!data) return 'Could not connect to Django. Make sure the backend is running.';
  if (typeof data.detail === 'string') return data.detail;
  return Object.entries(data).map(([field, messages]) => `${field}: ${[].concat(messages).join(' ')}`).join(' ');
};

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await adminService.login(credentials);
      localStorage.setItem('bluePandaAdminToken', response.data.token);
      onLogin(response.data.user);
    } catch (requestError) {
      setError(responseMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">
      <form className="admin-login-card" onSubmit={submit}>
        <span className="admin-kicker">Blue Panda CMS</span>
        <h1>Frontend Admin</h1>
        <p>Sign in with a Django staff or superuser account.</p>
        {error && <div className="admin-alert error">{error}</div>}
        <label>Username<input value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} required /></label>
        <label>Password<input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required /></label>
        <button className="admin-primary" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </main>
  );
}

function AdminPanel() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [resource, setResource] = useState('site-content');
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [values, setValues] = useState(emptyValues(RESOURCE_CONFIG['site-content'].fields));
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const config = useMemo(() => RESOURCE_CONFIG[resource], [resource]);

  const logout = () => {
    localStorage.removeItem('bluePandaAdminToken');
    setUser(null);
  };

  const loadItems = async (selectedResource = resource) => {
    setLoading(true);
    setError('');
    try {
      const response = await adminService.list(selectedResource);
      setItems(response.data.results || response.data);
    } catch (requestError) {
      if (requestError.response?.status === 401 || requestError.response?.status === 403) logout();
      setError(responseMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      if (!localStorage.getItem('bluePandaAdminToken')) {
        setCheckingAuth(false);
        return;
      }
      try {
        const response = await adminService.me();
        setUser(response.data);
      } catch {
        localStorage.removeItem('bluePandaAdminToken');
      } finally {
        setCheckingAuth(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) loadItems(resource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, resource]);

  useEffect(() => {
    setEditing(null);
    setValues(emptyValues(config.fields));
    setNotice('');
    setError('');
  }, [config]);

  const startEdit = (item) => {
    const nextValues = emptyValues(config.fields);
    config.fields.forEach((field) => {
      if (field.type !== 'file') nextValues[field.name] = item[field.name] ?? nextValues[field.name];
    });
    setEditing({ ...item, _identifier: item[config.identifier] });
    setValues(nextValues);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setNotice('');
    const data = new FormData();
    config.fields.forEach((field) => {
      const value = values[field.name];
      if (field.type === 'file') {
        if (value instanceof File) data.append(field.name, value);
      } else {
        data.append(field.name, value);
      }
    });
    try {
      if (editing) {
        await adminService.update(resource, editing._identifier, data);
        setNotice(`${config.label} record updated in Django.`);
      } else {
        await adminService.create(resource, data);
        setNotice(`${config.label} record created in Django.`);
      }
      setEditing(null);
      setValues(emptyValues(config.fields));
      await loadItems();
    } catch (requestError) {
      setError(responseMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  const remove = async (item) => {
    if (!window.confirm(`Delete "${config.title(item)}"? This also removes it from Django admin.`)) return;
    setLoading(true);
    setError('');
    try {
      await adminService.remove(resource, item[config.identifier]);
      setNotice('Record deleted from Django.');
      await loadItems();
    } catch (requestError) {
      setError(responseMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) return <main className="admin-loading">Checking admin access...</main>;
  if (!user) return <Login onLogin={setUser} />;

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div><span className="admin-kicker">Blue Panda</span><h1>Content Admin</h1></div>
        <nav>{Object.entries(RESOURCE_CONFIG).map(([key, item]) => <button key={key} className={resource === key ? 'active' : ''} onClick={() => setResource(key)}>{item.label}</button>)}</nav>
        <div className="admin-user"><strong>{user.username}</strong><span>Django staff account</span><a href="http://localhost:8000/admin/" target="_blank" rel="noreferrer">Open Django admin</a><button onClick={logout}>Sign out</button></div>
      </aside>

      <section className="admin-workspace">
        <header className="admin-header"><div><span className="admin-kicker">Shared Django records</span><h2>{config.label}</h2></div><span className="admin-count">{items.length} records</span></header>
        {notice && <div className="admin-alert success">{notice}</div>}
        {error && <div className="admin-alert error">{error}</div>}

        <form className="admin-form" onSubmit={submit}>
          <div className="admin-form-heading"><h3>{editing ? `Edit ${config.label}` : `Add ${config.label}`}</h3>{editing && <button type="button" onClick={() => { setEditing(null); setValues(emptyValues(config.fields)); }}>Cancel edit</button>}</div>
          <div className="admin-form-grid">
            {config.fields.map((field) => (
              <label key={field.name} className={`${field.type === 'textarea' ? 'wide' : ''} ${field.className || ''}`}>
                <span>{field.label}</span>
                {field.type === 'textarea' ? <textarea value={values[field.name]} onChange={(e) => setValues({ ...values, [field.name]: e.target.value })} required={field.required} /> :
                  field.type === 'select' ? <select value={values[field.name]} onChange={(e) => setValues({ ...values, [field.name]: e.target.value })} required={field.required}><option value="">Select...</option>{field.options.map((option) => <option key={option}>{option}</option>)}</select> :
                  field.type === 'checkbox' ? <input type="checkbox" checked={Boolean(values[field.name])} onChange={(e) => setValues({ ...values, [field.name]: e.target.checked })} /> :
                  field.type === 'file' ? <input type="file" accept="image/*" onChange={(e) => setValues({ ...values, [field.name]: e.target.files[0] || '' })} required={field.required && !editing} /> :
                  <input type={field.type || 'text'} value={values[field.name]} min={field.min} max={field.max} onChange={(e) => setValues({ ...values, [field.name]: e.target.value })} required={field.required} />}
              </label>
            ))}
          </div>
          <button className="admin-primary" disabled={loading}>{loading ? 'Saving...' : editing ? 'Save changes' : 'Create record'}</button>
        </form>

        <div className="admin-list">
          {loading && items.length === 0 ? <p>Loading records...</p> : items.map((item) => (
            <article className="admin-list-item" key={`${resource}-${item[config.identifier]}`}>
              <div><h3>{config.title(item)}</h3><p>{config.subtitle(item)}</p></div>
              <div className="admin-actions"><button onClick={() => startEdit(item)}>Edit</button><button className="danger" onClick={() => remove(item)}>Delete</button></div>
            </article>
          ))}
          {!loading && items.length === 0 && <p className="admin-empty">No records yet. Create the first one above.</p>}
        </div>
      </section>
    </main>
  );
}

export default AdminPanel;
