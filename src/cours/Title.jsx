import React from "react";

function Title({ title, clc }) {
  return (
    <h1 className="title" style={{ color: clc }}>
      {title}
    </h1>
  );
}

export default Title;
