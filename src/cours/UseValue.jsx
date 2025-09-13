import React, { useState } from "react";

function UseValue() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    firstname: "Rafik",
    age: 28,
  });
  const incremente = () => {
    setCount(count + 1);
  };
  const incrementeAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={incremente}>Incrémenter</button>
      <br />
      <p>Compteur Age : {person.age}</p>
      <button onClick={incrementeAge}>Incrémenter Age</button>
    </div>
  );
}

export default UseValue;
