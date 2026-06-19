import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        user
      );

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100">

      <Navbar showLinks={false} />

      <div className="d-flex justify-content-center align-items-center mt-5">

        <div
          className="border border-dark bg-white p-5"
          style={{
            width: "650px",
            borderRadius: "25px",
          }}
        >

          <h2 className="text-center mb-5">
            Register Here
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="row align-items-center mb-3">
              <label className="col-4 col-form-label fw-semibold">
                Name
              </label>

              <div className="col-8">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={user.name}
                  onChange={handleChange}
                  style={{
                    borderRadius: "12px",
                  }}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="row align-items-center mb-3">
              <label className="col-4 col-form-label fw-semibold">
                Email
              </label>

              <div className="col-8">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleChange}
                  style={{
                    borderRadius: "12px",
                  }}
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div className="row align-items-center mb-3">
              <label className="col-4 col-form-label fw-semibold">
                Username
              </label>

              <div className="col-8">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={user.username}
                  onChange={handleChange}
                  style={{
                    borderRadius: "12px",
                  }}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="row align-items-center mb-5">
              <label className="col-4 col-form-label fw-semibold">
                Password
              </label>

              <div className="col-8">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={user.password}
                  onChange={handleChange}
                  style={{
                    borderRadius: "12px",
                  }}
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="text-center mb-3">
              <button
                type="submit"
                className="btn btn-outline-dark px-5"
                style={{
                  borderRadius: "12px",
                }}
              >
                Register
              </button>
            </div>

            {/* Message */}
            {message && (
              <p className="text-center text-success">
                {message}
              </p>
            )}

            {/* Login Link */}
            <div className="text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-decoration-none fw-semibold"
              >
                Login here
              </Link>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;