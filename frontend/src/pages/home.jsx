import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container-fluid bg-light min-vh-100">

      {/* Navbar */}
      <Navbar />

      {/* Greeting */}
      <div className="container mt-4">
        <h2 className="fw-semibold">
          Hi {user?.name}!
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="container mt-5">

        <div className="row justify-content-center g-5">

          {/* Health Record */}
          <div className="col-md-4 text-center">
            <button
              className="btn btn-light border border-dark shadow-sm w-100"
              style={{
                height: "220px",
                borderRadius: "25px",
                fontSize: "1.8rem",
              }}
              onClick={() => navigate("/health-record")}
            >
              Health Record
            </button>
          </div>

          {/* Task Reminder */}
          <div className="col-md-4 text-center">
            <button
              className="btn btn-light border border-dark shadow-sm w-100"
              style={{
                height: "220px",
                borderRadius: "25px",
                fontSize: "1.8rem",
              }}
              onClick={() => navigate("/task-reminders")}
            >
              Task Reminders
            </button>
          </div>

          {/* Memory Vault / Future Feature */}
          <div className="col-md-4 text-center">
            <button
              className="btn btn-light border border-dark shadow-sm w-100"
              style={{
                height: "220px",
                borderRadius: "25px",
              }}
              onClick={() => navigate("/memories")}
            >
            </button>
          </div>

          {/* My Diary */}
          <div className="col-md-4 text-center">
            <button
              className="btn btn-light border border-dark shadow-sm w-100"
              style={{
                height: "220px",
                borderRadius: "25px",
                fontSize: "1.8rem",
              }}
              onClick={() => navigate("/diary")}
            >
              My Diary
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default HomePage;