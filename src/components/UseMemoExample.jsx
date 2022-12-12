import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);
  const renders = useRef(1);
  useEffect(() => {
    renders.current = renders.current + 1;
  });
  const handleClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <h2 className="my3">
        Sqrt of {number} is {sqrt}
      </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick} className="btn btn-primary">
        Re-Render
      </button>
      <h1>Renders: {renders.current}</h1>
    </div>
  );
}
function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log("expensive function called!");
  return Math.sqrt(n);
}
export default UseMemoExample;
