import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main>
      <NavBar />
      <div class="container mt-2" >
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
