import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
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

export default api;
