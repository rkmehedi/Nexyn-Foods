import React from "react";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
