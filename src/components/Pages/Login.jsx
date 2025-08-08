import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import loginBg from "../../assets/login-bg.jpg";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Login is successful!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to login Please try again!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Signed in with Google!",
          icon: "success",
          confirmButtonText: "Great!",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to login with Google Please try again!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div
      className="hero min-h-[70vh]"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col w-full px-4">
        <div className="card w-full max-w-md shadow-2xl bg-base-100/60">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
              Login Now
            </h1>

            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text text-gray-700 dark:text-gray-300 font-semibold">
                  Email Address:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your-email@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text text-gray-700 dark:text-gray-300 font-semibold">
                  Password:
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-6 items-center text-center">
              <button className="btn text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] hover:text-white transition-all duration-300 w-full">
                Login
              </button>
            </div>

            <div className="divider text-gray-600 dark:text-gray-400">OR</div>

            <div className="form-control items-center text-center">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-gray-400 dark:text-gray-300 dark:hover:bg-red-500 dark:hover:text-white w-64"
              >
                <FaGoogle className="mr-2" /> Continue with Google
              </button>
            </div>

            <p className="text-center mt-4 text-gray-800 dark:text-white">
              New to Nexyn Foods?{" "}
              <Link
                to="/register"
                className="link link-hover text-red-500 font-semibold dark:text-red-400"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
