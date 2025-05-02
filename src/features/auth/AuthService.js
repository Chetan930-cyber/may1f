import axios from "axios";

// Render बैकएंड URL से कनेक्ट करें
const API_URL = "https://may1b.onrender.com/api/auth";

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