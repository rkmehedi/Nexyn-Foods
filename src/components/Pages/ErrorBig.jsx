import React from "react";
import { Link, useRouteError } from "react-router";
import errorImage from "../../assets/404-error.jpg";

const ErrorBig = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${errorImage})` }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 animate-fade-in">
        <h1 className="text-7xl font-extrabold text-[#56B4D3] mb-4 drop-shadow-md">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-200 mb-6">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {error && (
          <p className="text-sm text-red-300 italic mb-6">
            {error.statusText || error.message}
          </p>
        )}

        <Link
          to="/"
          className="btn rounded-lg text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorBig;
