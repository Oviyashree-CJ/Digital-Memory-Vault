import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const MedicineDetails = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="container mt-5">
        <h4>No medicine data available.</h4>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="border rounded p-4">

          {/* Schedule Table */}
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Morning</th>
                <th>Afternoon</th>
                <th>Night</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{state.name}</td>
                <td>{state.morning}</td>
                <td>{state.afternoon}</td>
                <td>{state.night}</td>
                <td>{state.time}</td>
              </tr>
            </tbody>
          </table>

          {/* Details Section */}
          <h4 className="mt-4">Medicine Detail Card</h4>

          <div className="card mt-3" style={{ maxWidth: "300px" }}>
            <div className="card-body">
              <h5 className="card-title">{state.name}</h5>
              <p className="card-text">{state.description}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MedicineDetails;