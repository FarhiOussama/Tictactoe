import React from "react";

function PokeInfo({ name, sprite, closeInfo, types }) {
  return (
    <div
      style={{ backgroundImage: `url(${sprite})` }}
      className="pokemon-info-card"
    >
      <div>
        <h2>Pokemon : {name}</h2>
      </div>

      <div>
        <h2>Types :</h2>
        {types.map((infoType, index) => {
          return <p key={index}>{infoType.type.name} </p>;
        })}
      </div>

      <div>
        <button onClick={() => closeInfo()}>Close</button>
      </div>
    </div>
  );
}

export default PokeInfo;
