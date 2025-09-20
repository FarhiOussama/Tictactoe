import React from "react";
import { useNavigate } from "react-router-dom";

function DashChoice() {
  const navigate = useNavigate();
  return (
    <div className="dashChoice">
      <div
        style={{ backgroundColor: "green", padding: "10px" }}
        onClick={() => {
          navigate("/dashboard/stats");
        }}
      >
        Stats
      </div>

      <div
        style={{ backgroundColor: "red", padding: "10px" }}
        onClick={() => {
          navigate("/dashboard/bookStats");
        }}
      >
        Book Stats
      </div>
    </div>
  );
}

export default DashChoice;
