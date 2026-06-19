import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AuthChoice() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-light min-vh-100 py-3">

      <Navbar showLinks={false} />

      <div className="row justify-content-center align-items-center mt-5 pt-5">

        {/* Login */}
        <div className="col-md-3 text-center mb-4">

          <button
            className="btn btn-light border border-dark shadow-sm fw-semibold"
            style={{
              width: "220px",
              height: "180px",
              borderRadius: "25px",
              fontSize: "1.5rem",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

        {/* Register */}
        <div className="col-md-3 text-center mb-4">

          <button
            className="btn btn-light border border-dark shadow-sm fw-semibold"
            style={{
              width: "220px",
              height: "180px",
              borderRadius: "25px",
              fontSize: "1.5rem",
            }}
            onClick={() => navigate("/register")}
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
}

export default AuthChoice;