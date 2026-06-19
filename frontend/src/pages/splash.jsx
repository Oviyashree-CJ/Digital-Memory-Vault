import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigate("/auth");
    }, 3000);

    return () => clearTimeout(timer);
    }, [navigate]);
  
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">

      <div
        className="card shadow-lg border-dark"
        style={{
          width: "700px",
          borderRadius: "30px",
          minHeight: "500px",
        }}
      >
        <div className="card-body d-flex flex-column justify-content-center align-items-center p-5">

          {/* Logo Circle */}
          <div
            className="rounded-circle d-flex justify-content-center align-items-center mb-4"
            style={{
              width: "220px",
              height: "220px",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="img-fluid w-auto h-auto"
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          {/* App Name */}
          <h2 className="fw-bold mb-3">
            Memory Vault
          </h2>

          {/* About App */}
          <p
            className="text-center text-secondary mb-5"
            style={{ maxWidth: "500px" }}
          >
            Where Care meets Memory
          </p>

          {/* Loading Bar */}
          <div className="w-75">
            <div
              className="progress"
              style={{ height: "8px" }}
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Splash;