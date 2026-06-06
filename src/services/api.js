import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('bluePandaAdminToken');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export const blogService = {
  getAll: (params = {}) => api.get('/blogs/', { params }),
  getBySlug: (slug) => api.get(`/blogs/${slug}/`),
};

export const siteService = {
  getAllContent: () => api.get('/site-content/'),
  getContentByKey: (key) => api.get(`/site-content/${key}/`),
  getServices: () => api.get('/services/'),
  getTestimonials: () => api.get('/testimonials/'),
};

export const adminService = {
  login: (credentials) => api.post('/admin/login/', credentials),
  me: () => api.get('/admin/me/'),
  list: (resource) => api.get(`/${resource}/`, { params: { page_size: 200 } }),
  create: (resource, data) => api.post(`/${resource}/`, data),
  update: (resource, identifier, data) => api.patch(`/${resource}/${identifier}/`, data),
  remove: (resource, identifier) => api.delete(`/${resource}/${identifier}/`),
};

export default api;
