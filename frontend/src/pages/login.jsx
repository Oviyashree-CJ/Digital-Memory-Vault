import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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
        "http://localhost:5000/login",
        user
      );

      setMessage(response.data.message);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      setMessage("Invalid Username or Password");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100">

      <Navbar showLinks={false} />

      <div className="d-flex justify-content-center align-items-center mt-5">

        <div
          className="border border-dark bg-white p-5"
          style={{
            width: "520px",
            borderRadius: "25px",
          }}
        >

          <h2 className="text-center mb-5">
            Login Here
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Username */}

            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control"
                value={user.username}
                onChange={handleChange}
                style={{
                  borderRadius: "15px",
                  height: "50px",
                }}
                required
              />
            </div>

            {/* Password */}

            <div className="mb-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={user.password}
                onChange={handleChange}
                style={{
                  borderRadius: "15px",
                  height: "50px",
                }}
                required
              />
            </div>

            {/* Forgot Password */}

            <div className="text-end mb-4">
              <Link
                to="/forgot-password"
                className="text-decoration-none"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}

            <div className="text-center mb-3">
              <button
                type="submit"
                className="btn btn-outline-dark px-5"
                style={{
                  borderRadius: "12px",
                }}
              >
                Login
              </button>
            </div>

            {/* Message */}

            {message && (
              <p className="text-center text-danger">
                {message}
              </p>
            )}

            {/* Register */}

            <div className="text-center mt-3">
              New User?{" "}
              <Link
                to="/register"
                className="text-decoration-none fw-semibold"
              >
                Register Here
              </Link>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;