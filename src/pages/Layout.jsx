import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="grid  sm:grid-col-12 grid-cols-7 grid-flow-row">
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
