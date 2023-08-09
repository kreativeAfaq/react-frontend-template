import React from "react";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
