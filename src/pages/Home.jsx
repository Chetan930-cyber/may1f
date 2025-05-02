import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center flex flex-col items-center justify-center text-white p-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Welcome to Recipe House</h1>
      <p className="max-w-2xl text-lg text-center mb-8">
        Discover premium recipes from around the world. Sign up to unlock exclusive content or log in if you already have an account.
      </p>
      <div className="space-x-6">
        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-lg shadow-lg transition">
          Login
        </Link>
        <Link to="/signup" className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl text-lg shadow-lg transition">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;