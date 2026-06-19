import React from "react";
import Navbar from "../components/Navbar";
import CardButton from "../components/CardButton";

const Prescription = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <Navbar showLinks={true} />

      <div
        className="container py-5"
        style={{ maxWidth: "1000px" }}
      >
        <div className="row justify-content-center g-4">
          
          <div className="col-md-5">
            <CardButton
              title="Prescription"
              path="/prescription-upload"
              height="300px"
            />
          </div>

          <div className="col-md-5">
            <CardButton
              title="Medicine Checklist & Benefits"
              path="/medicine-checklist"
              height="300px"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Prescription;