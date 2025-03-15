import api from "./axiosClient";

const categoryApi = {
  getAllCategory: () => api.get("/cotagory"),
  getCategoryById: (id) => api.get(`/cotagory/${id}`),
  createCategory: (data) => api.post("/cotagory", data),
  updateCategory: (id, data) => api.post(`/cotagory/${id}`, data),
  deleteCategory: (id) => api.delete(`/cotagory/${id}`),
  searchCategory: (query) => api.get(`/cotagory/search?q=${query}`),
};

export default categoryApi;