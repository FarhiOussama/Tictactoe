import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  let dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={dashboardStyle}>
        <h1>Welcome to the DASHBOARD</h1>
        <p>
          We reserve this place to display some statistics about our website
        </p>
      </div>

      <div>
        <Outlet />
      </div>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
}

export default Dashboard;
