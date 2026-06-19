import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const DoctorVisit = () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetchVisits();
  }, []);

  const fetchVisits = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/doctor-visits"
      );
      setVisits(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateVisit = async (id, date, time) => {
    try {
      await axios.put(
        `http://localhost:5000/api/doctor-visits/${id}`,
        {
          visitDate: date,
          visitTime: time,
        }
      );

      alert("Appointment updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update appointment.");
    }
  };

  const handleChange = (index, field, value) => {
    const updated = [...visits];
    updated[index][field] = value;
    setVisits(updated);
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div
          className="border border-2 rounded-4 p-4 mx-auto"
          style={{ maxWidth: "1100px" }}
        >
          <h3 className="mb-4">Doctor Visit Reminder</h3>

          <table className="table table-bordered align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>Hospital</th>
                <th>Doctor Name</th>
                <th>Specialist</th>
                <th>Next Visit Date</th>
                <th>Next Visit Time</th>
                <th>Save</th>
              </tr>
            </thead>

            <tbody>
              {visits.map((visit, index) => (
                <tr key={visit.id}>
                  <td>{visit.hospital_name}</td>

                  <td>{visit.doctor_name}</td>

                  <td>{visit.specialist}</td>

                  <td>
                    <input
                      type="date"
                      className="form-control"
                      value={visit.visit_date || ""}
                      onChange={(e) =>
                        handleChange(
                          index,
                          "visit_date",
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="time"
                      className="form-control"
                      value={visit.visit_time || ""}
                      onChange={(e) =>
                        handleChange(
                          index,
                          "visit_time",
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        updateVisit(
                          visit.id,
                          visit.visit_date,
                          visit.visit_time
                        )
                      }
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DoctorVisit;