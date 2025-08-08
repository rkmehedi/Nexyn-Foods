import React from "react";
import { Link } from "react-router";
import logo from "../../assets/nexyn-foods-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e7717d] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Nexyn Foods Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-36 xl:h-38 w-auto bg-white p-1 rounded-lg shadow-md"
            />
            <span className="text-2xl font-bold tracking-wide">
              Nexyn Foods
            </span>
          </div>
          <div className="flex flex-wrap gap-6 justify-center md:justify-end text-sm font-medium">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/foods" className="hover:underline">
              All Foods
            </Link>
            <Link to="/foodGallery" className="hover:underline">
              Gallery
            </Link>
            <Link to="/" className="hover:underline">
              Contact US
            </Link>
            <Link to="/" className="hover:underline">
              About US
            </Link>
          </div>
        </div>
        <div className="border-t border-white/30 my-6"></div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Nexyn Foods. All rights reserved.</p>
          <div className="flex gap-5 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
