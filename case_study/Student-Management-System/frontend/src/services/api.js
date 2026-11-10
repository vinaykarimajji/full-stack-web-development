import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getStudents = async () => {
  const response = await api.get("/students");
  return response.data.students;
};

export const addStudent = async (student) => {
  const response = await api.post("/students", student);
  return response.data;
};

export const updateStudent = async (id, student) => {
  const response = await api.put(`/students/${id}`, student);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await api.delete(`/students/${id}`);
  return response.data;
};

export default api;