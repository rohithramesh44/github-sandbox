import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
  const [name, setName] = useState("");
  const renders = useRef(1);
  const prevName = useRef("");
  const handleChange = (e) => setName(e.target.value);
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [handleChange]);
  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="form-control mb-3"
      />
      <h2>{name}</h2>
    </div>
  );
}

export default UseRefExample2;
