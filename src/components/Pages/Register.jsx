import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import registerBg from "../../assets/login-bg.jpg";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      Swal.fire(
        "Error!",
        "Password must be at least 6 characters long.",
        "error"
      );
      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire(
        "Error!",
        "Password must contain at least one uppercase letter.",
        "error"
      );
      return;
    }
    if (!/[a-z]/.test(password)) {
      Swal.fire(
        "Error!",
        "Password must contain at least one lowercase letter.",
        "error"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Registration successful! Welcome to Nexyn Foods.",
              icon: "success",
              confirmButtonText: "Get Started",
            });
            navigate("/");
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            Swal.fire("Error!", error.message, "error");
          });
      })
      .catch((error) => {
        console.error("Create user error:", error);
        Swal.fire("Error!", error.message, "error");
      });
  };

  return (
    <div
      className="hero min-h-[70vh]"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col w-full  px-4">
        <div className="card w-full max-w-lg shadow-2xl bg-base-100/60">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
              Create an Account
            </h1>

            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text text-gray-700 dark:text-gray-300 font-semibold">
                  Your Name:
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text text-gray-700 dark:text-gray-300 font-semibold">
                  Photo URL:
                </span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="http://example.com/photo.jpg"
                className="input input-bordered w-full"
                required
              />
            </div>

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
                placeholder="Create a strong password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-6 items-center text-center">
              <button className="btn text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] hover:text-white transition-all duration-300 w-full">
                Register
              </button>
            </div>

            <p className="text-center mt-4 text-gray-800 dark:text-white">
              Already have an account?
              <Link
                to="/login"
                className="link link-hover text-red-500 font-semibold dark:text-red-400"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
