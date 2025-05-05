import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
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
      await dispatch(login(form)).unwrap();
      Swal.fire({
        title: "Welcome Back!",
        text: "You've successfully logged in",
        icon: "success",
        confirmButtonColor: "#F472B6",
      });
      navigate("/premium");
    } catch {
      Swal.fire({
        title: "Oops!",
        text: "Wrong credentials. Please try again.",
        icon: "error",
        confirmButtonColor: "#F472B6",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 blob-animation"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 blob-animation delay-2"></div>
      <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 blob-animation delay-4"></div>
      
      <div className="relative z-10 w-full max-w-md fade-in-animation">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white border-opacity-30">
          <div className="scale-in-animation">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-400 to-blue-400 p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-center text-pink-800">Welcome Back!</h2>
            <p className="text-blue-800 text-center mb-8">Log in to access premium recipes</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-pink-800 font-medium text-lg">Email Address</label>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white bg-opacity-70 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-pink-300 text-pink-800 font-medium text-lg shadow-md transition-transform hover:scale-[1.01] focus:scale-[1.02]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-pink-800 font-medium text-lg">Password</label>
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white bg-opacity-70 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent placeholder-pink-300 text-pink-800 font-medium text-lg shadow-md transition-transform hover:scale-[1.01] focus:scale-[1.02]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 mt-8 bg-gradient-to-r from-pink-500 via-pink-400 to-blue-400 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.03] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </div>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-blue-800">
              Don't have an account?{" "}
              <a
                className="font-bold text-pink-600 hover:text-pink-800 underline transition-colors hover:scale-105"
                href="/signup"
              >
                Sign up
              </a>
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-8 mt-10">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-blue-800">Secure</span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-xs font-medium text-blue-800">Premium</span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-blue-800">Fast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        .blob-animation {
          animation: blob 7s infinite;
        }
        .delay-2 {
          animation-delay: 2s;
        }
        .delay-4 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .fade-in-animation {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scale-in-animation {
          animation: scaleIn 0.3s ease-out forwards;
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Login;