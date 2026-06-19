import { useState } from "react";
import Navbar from "../components/Navbar"; // Update the path if needed

const HealthRecordRegistration = () => {
  const [formData, setFormData] = useState({
    hospital: "",
    doctor: "",
    specialist: "",
    healthIssue: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDoc = async () => {
    try {
      const response = await fetch("http://localhost:5000/add-health-record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Document added successfully!");

        // Clear form fields
        setFormData({
          hospital: "",
          doctor: "",
          specialist: "",
          healthIssue: "",
        });
      } else {
        alert(data.message || "Failed to add document");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div
          className="border border-2 rounded-4 p-4 mx-auto"
          style={{ maxWidth: "950px" }}
        >
          <h3 className="mb-4">Welcome to HR Registration!</h3>

          <div className="row justify-content-center">
            <div className="col-md-6">

              <div className="mb-3">
                <select
                  className="form-select"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                >
                  <option value="">Hospital Name</option>
                  <option>Apollo Hospital</option>
                  <option>Fortis Hospital</option>
                  <option>AIIMS</option>
                </select>
              </div>

              <div className="mb-3">
                <select
                  className="form-select"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                >
                  <option value="">Doctor Name</option>
                  <option>Dr. Kumar</option>
                  <option>Dr. Priya</option>
                  <option>Dr. Ravi</option>
                </select>
              </div>

              <div className="mb-3">
                <select
                  className="form-select"
                  name="specialist"
                  value={formData.specialist}
                  onChange={handleChange}
                >
                  <option value="">Specialist</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Neurologist</option>
                </select>
              </div>

              <div className="mb-3">
                <select
                  className="form-select"
                  name="healthIssue"
                  value={formData.healthIssue}
                  onChange={handleChange}
                >
                  <option value="">Health Issue</option>
                  <option>Fever</option>
                  <option>Diabetes</option>
                  <option>Blood Pressure</option>
                </select>
              </div>

            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
            className="btn btn-outline-secondary rounded-pill px-4"
            onClick={handleAddDoc}
            disabled={
              !formData.hospital ||
              !formData.doctor ||
              !formData.specialist ||
              !formData.healthIssue
            }
          >
            Add Doc +
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthRecordRegistration;