import React from "react";

function Pagination({ text, changeUrl, url }) {
  return (
    <button className="btnUrl" onClick={() => changeUrl(url)}>
      {text}
    </button>
  );
}

export default Pagination;
