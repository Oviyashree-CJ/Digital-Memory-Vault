import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardButton from "../components/CardButton";

const HealthRecord = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Medicine Report",
      path: "/medicine-report",
    },
    {
      title: "Prescription",
      path: "/prescription",
    },
    {
      title: "Allergy",
      path: "/allergy",
    },
    {
      title: "Doctor Visit",
      path: "/doctor-visit",
    },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100">
      <Navbar showLinks={true} />

      <div className="container mt-3" style={{ maxWidth: "800px" }}>
        <h4 className="mb-4">Welcome to Health Record!</h4>

        <div className="row g-4 mb-5">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-sm-6">
              <CardButton
                title={feature.title}
                path={feature.path}
                height="200px"
              />
            </div>
          ))}
        </div>

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