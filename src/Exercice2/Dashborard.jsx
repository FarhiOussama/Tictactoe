import React from "react";
import CardBobEponge from "./CardBobEponge";

function Dashborard({ initListBob }) {
  return (
    <div className="containtDashboard">
      {initListBob.map((Bob) => {
        return <CardBobEponge key={Bob.id} infoBob={Bob} />;
      })}
    </div>
  );
}

export default Dashborard;
