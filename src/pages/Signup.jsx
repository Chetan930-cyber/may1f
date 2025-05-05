import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/auth/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(signup(form)).unwrap();
      Swal.fire({
        title: "Success!",
        text: "Your account has been created successfully!",
        icon: "success",
        confirmButtonColor: "#10B981",
      });
      navigate("/login");
    } catch {
      Swal.fire({
        title: "Oops!",
        text: "User already exists or something went wrong",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Food background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
          opacity: 0.15 
        }}
      ></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card with glass effect */}
        <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-2xl border border-white/30">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            {/* Decorative food icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-white/80 p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-center text-white drop-shadow-md">Create Your Account</h2>
            <p className="text-white text-opacity-90 text-center text-lg font-medium drop-shadow-sm">Join our community of food lovers</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-white text-lg font-semibold drop-shadow-sm">Your Name</label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/50 border-2 border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-600 text-gray-800 font-medium text-lg shadow-md"
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-lg font-semibold drop-shadow-sm">Email Address</label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/50 border-2 border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-600 text-gray-800 font-medium text-lg shadow-md"
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-lg font-semibold drop-shadow-sm">Password</label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/50 border-2 border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-600 text-gray-800 font-medium text-lg shadow-md"
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, backgroundColor: "#4C1D95" }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full py-4 px-6 mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                "Join Now"
              )}
            </motion.button>
          </form>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>

          <div className="mt-8 text-center">
            <p className="text-white text-lg font-medium drop-shadow-sm">
              Already have an account?{" "}
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="font-bold text-indigo-200 hover:text-white underline transition-colors"
                href="/login"
              >
                Log in
              </motion.a>
            </p>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex justify-center space-x-6">
            <div className="text-white/80 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">Secure</span>
            </div>
            <div className="text-white/80 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Fast</span>
            </div>
            <div className="text-white/80 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-sm">Premium</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;