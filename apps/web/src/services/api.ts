import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const authAPI = {
  register: (data: { name: string; email: string; password: string; role?: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  getMe: () => api.get('/auth/me'),
};

// Jobs endpoints
export const jobsAPI = {
  getAll: (filters?: { status?: string; company?: string }) =>
    api.get('/jobs', { params: filters }),
  getById: (id: string) => api.get(`/jobs/${id}`),
  create: (data: any) => api.post('/jobs', data),
  update: (id: string, data: any) => api.put(`/jobs/${id}`, data),
  delete: (id: string) => api.delete(`/jobs/${id}`),
};

// Applications endpoints
export const applicationsAPI = {
  apply: (data: { job: string; resume_url: string; cover_letter?: string }) =>
    api.post('/applications', data),
  getMyApplications: () => api.get('/applications/student/me'),
  getJobApplications: (jobId: string) => api.get(`/applications/job/${jobId}`),
  updateStatus: (id: string, status: string) =>
    api.put(`/applications/${id}`, { status }),
};

// Companies endpoints
export const companiesAPI = {
  getAll: () => api.get('/companies'),
  getById: (id: string) => api.get(`/companies/${id}`),
  create: (data: any) => api.post('/companies', data),
  update: (id: string, data: any) => api.put(`/companies/${id}`, data),
};

// Interviews endpoints
export const interviewsAPI = {
  schedule: (data: any) => api.post('/interviews', data),
  getByApplication: (applicationId: string) =>
    api.get(`/interviews/application/${applicationId}`),
  update: (id: string, data: any) => api.put(`/interviews/${id}`, data),
};

export default api;
