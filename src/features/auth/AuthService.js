import axios from "axios";

// एनवायरनमेंट वेरिएबल का उपयोग करें
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";

const login = async ({ email, password }) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};

const signup = async ({ name, email, password }) => {
  const res = await axios.post(`${API_URL}/signup`, { name, email, password });
  return res.data;
};

const AuthService = { login, signup };
export default AuthService;