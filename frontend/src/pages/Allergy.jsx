import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Allergy = () => {
  const [search, setSearch] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/allergy/search",
        {
          params: {
            search,
            symptoms,
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("No allergy information found.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div
          className="border border-2 rounded-4 p-4 mx-auto"
          style={{ maxWidth: "950px" }}
        >
          {/* Search Row */}
          <div className="row g-3 mb-4">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search Product / Fruit / Vegetable"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Symptoms (Optional)"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-primary w-100"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className="mt-4">
              <h4>{result.allergy_name}</h4>

              <p>
                <strong>Symptoms:</strong> {result.symptoms}
              </p>

              <p>
                <strong>Remedy:</strong> {result.remedy}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Allergy;