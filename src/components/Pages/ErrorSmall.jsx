import React from "react";
import { Link } from "react-router";
import errorImage from "../../assets/404-error2.jpg";

const ErrorSmall = ({ message }) => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${errorImage})` }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h1 className="text-6xl font-extrabold text-[#56B4D3] mb-4 drop-shadow-md">
          Oops!
        </h1>
        <h2 className="text-3xl font-bold text-white mb-4">
          Product Not Found
        </h2>
        <p className="text-lg text-white mb-6">
          {message ||
            "Sorry, we couldn't find the food item you're looking for. It might no longer be available."}
        </p>

        <Link
          to="/foods"
          className="btn rounded-lg text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Back to All Foods
        </Link>
      </div>
    </div>
  );
};

export default ErrorSmall;
