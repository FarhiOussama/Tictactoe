import React from "react";

function Book({ id, title, author, coverImage }) {
  return (
    <div>
      <div>
        <img src={coverImage} />
      </div>

      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
    </div>
  );
}

export default Book;
