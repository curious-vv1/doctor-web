import React, { useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import './Home.css'; 


const Home = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="home-container">
      <Header />
      <div className="nav-links">
        <span 
          className={`nav-item ${activeTab === "about" ? "active" : ""}`} 
          onClick={() => setActiveTab("about")}
        >
          About
        </span>
        <span 
          className={`nav-item ${activeTab === "contact" ? "active" : ""}`} 
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </span>
      </div>
      {activeTab === "about" && <About />}
      {activeTab === "contact" && <Contact />}
      <Footer />
    </div>
  );
};

export default Home;
