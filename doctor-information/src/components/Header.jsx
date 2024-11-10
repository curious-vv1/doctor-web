import React from "react";
import { Link } from "react-router-dom";
// import '../Home.css';
import doc from "../assets/doc.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={doc} alt="Doctor" className="header-image" />
      <div>
        <h1 className="header-title">Dr. Ramakanta Panda</h1>
        <h2 className="header-subtitle">Cardiac Surgeon, Founder & Chairman</h2>
        <Link to="/appointment" className="appointment-button">Book Appointment</Link>
      </div>
    </div>
  );
};

export default Header;
