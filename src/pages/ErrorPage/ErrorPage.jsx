import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="text-center px-6">
        {/* 404 Text */}
        <h1 className="text-[140px] md:text-[180px] font-extrabold bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-violet-500 drop-shadow-lg animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full text-lg font-semibold 
          bg-linear-to-r from-pink-500 to-violet-600 
          hover:from-pink-600 hover:to-violet-700 
          transition-all duration-300 shadow-lg hover:shadow-pink-500/40"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
