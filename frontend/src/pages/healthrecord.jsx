import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import medicineImg from "../assets/medicine.jpg";
// import prescriptionImg from "../assets/prescription.jpg";
// import allergyImg from "../assets/allergy.jpg";
// import doctorImg from "../assets/doctor.jpg";

const HealthRecord = () => {
  const navigate = useNavigate();

  const features = [
    {
        title: "Medicine Report",
        path: "/medicine-report",
        // image: medicineImg,
    },
    {
        title: "Prescription",
        path: "/prescription",
        // image: prescriptionImg,
    },
    {
        title: "Allergy",
        path: "/allergy",
        //image: allergyImg,
    },
    {
        title: "Doctor Visit",
        path: "/doctor-visit",
        // image: doctorImg,
    },
    ];

  return (
    <div className="container-fluid bg-light min-vh-100">
        <Navbar showLinks={true}/>
      <div
        className="p-4 mx-auto"
        style={{ maxWidth: "950px" }}
      >

        <h4 className="mb-4">Welcome to Health Record!</h4>

        {/* Feature Cards */}
        <div className="row g-4 mb-5">
        {features.map((feature, index) => (
            <div key={index} className="col-md-3 col-sm-6">
            <button
                className="btn w-100 text-black fw-bold d-flex align-items-center justify-content-center"
                style={{
                height: "140px",
                // backgroundImage: `url(${feature.image})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
                border: "2px solid black",
                borderRadius: "12px",
                }}
                onClick={() => navigate(feature.path)}
            >
                {feature.title}
            </button>
            </div>
        ))}
        </div>

        {/* Bottom Button */}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-secondary text-black rounded-pill px-4"
            onClick={() => navigate("/health-record-registration")}
          >
            Health Record Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthRecord;