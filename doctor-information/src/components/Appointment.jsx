import React, { useState } from "react"; // Added useState for form handling
import "./Appointment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addRow = async (row) => {
    // Updated to accept a single row
    try {
      const response = await fetch("https://doctor-web-4cz4.onrender.com/appointments", {
        // Send POST request to backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(row), // Convert row data to JSON
      });

      console.log("Response status:", response.status); // Log the response status

      if (!response.ok) {
        let errorData = await response.statusText(); // Get error data if response is not ok
        console.error("Error from server:", errorData);
        alert("Failed to book appointment: " + errorData.message);
        throw new Error("Network response was not ok"); // Throw error after handling
      }

      let data = response.statusText;
      console.log("Response from server:", data);
      alert("Your appointment is booked");
    } catch (error) {
      console.error("Error adding row to spreadsheet:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData); // Log the form data
    await addRow(formData); // Pass form data directly
    setFormData({ name: "", mobile: "", email: "", date: "", time: "" }); // Reset form
  };

  return (
    <div className="appointment-enclose">
      <div className="appointment-container">
        <div className="info">
          <Link to="/" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" className="appointment-back"/>
          </Link>
          <div className="info-tab">
            <h3>For Appointments</h3>
            <p>+91 8447 666 333</p>
            <p>info@metrohospitals.com</p>
          </div>
          <div className="info-tab">
            <h3>OPD Timings</h3>
            <p>Mon - Sat : 10AM to 4PM</p>
          </div>
        </div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <h2>Book an Appointment</h2>
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Mobile*</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />

          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Date*</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Time*</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
