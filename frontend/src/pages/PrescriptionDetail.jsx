import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const PrescriptionDetail = () => {
  const [formData, setFormData] = useState({
    medicineName: "",
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
    time: "",
  });

  const medicines = [
    "Dolo 650",
    "Paracetamol",
    "Amoxicillin",
    "Cetirizine",
    "Vitamin C",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAdd = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/prescription/add",
        formData
      );

      alert("Prescription added successfully!");

      setFormData({
        medicineName: "",
        morning: false,
        afternoon: false,
        evening: false,
        night: false,
        time: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to save prescription.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div
          className="border border-2 rounded-4 p-4 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          {/* Medicine Dropdown */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-5">
              <select
                className="form-select"
                name="medicineName"
                value={formData.medicineName}
                onChange={handleChange}
              >
                <option value="">Medicine Name</option>

                {medicines.map((medicine, index) => (
                  <option key={index} value={medicine}>
                    {medicine}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Time of Day */}
          <div className="row text-center mb-4">
            <div className="col">
              <div className="border rounded p-2">
                <label>
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    name="morning"
                    checked={formData.morning}
                    onChange={handleChange}
                  />
                  Morning
                </label>
              </div>
            </div>

            <div className="col">
              <div className="border rounded p-2">
                <label>
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    name="afternoon"
                    checked={formData.afternoon}
                    onChange={handleChange}
                  />
                  Afternoon
                </label>
              </div>
            </div>

            <div className="col">
              <div className="border rounded p-2">
                <label>
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    name="evening"
                    checked={formData.evening}
                    onChange={handleChange}
                  />
                  Evening
                </label>
              </div>
            </div>

            <div className="col">
              <div className="border rounded p-2">
                <label>
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    name="night"
                    checked={formData.night}
                    onChange={handleChange}
                  />
                  Night
                </label>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-4">
              <input
                type="time"
                className="form-control"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Add Button */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-primary rounded-pill px-4"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionDetail;