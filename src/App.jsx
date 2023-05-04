import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "../public/bg.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      {/* <div className="bg-neutral opacity-40 "> </div> */}
      <ToastContainer></ToastContainer>
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
