import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ showLinks = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  return (
    <nav className="navbar navbar-expand-lg bg-transparent px-4 py-3 ms-2 me-2 border-bottom">

      {/* Logo */}
      <div className="d-flex align-items-center">
        <img src="/logo.png" alt="Memora" width="80" className="me-2 rounded-circle"/>
        <span className="fw-bold fs-3">Memora</span>
      </div>

      {/* Right Side */}
      {showLinks && (
        <div
          className="ms-auto position-relative"
          ref={dropdownRef}
        >

          <button
            type="button"
            className="btn btn-outline-secondary border-0 w-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Profile
          </button>

          {menuOpen && (
            <div
              className="position-absolute end-0 mt-2 p-2 bg-white border rounded shadow"
              style={{
                width: "180px",
                zIndex: 1000,
              }}
            >

              <Link
                to="/profile"
                className="dropdown-item py-2"
                onClick={() => setMenuOpen(false)}
              >
                View Profile
              </Link>

              <button className="dropdown-item py-2" onClick={handleLogout}>
                Logout
              </button>

            </div>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;