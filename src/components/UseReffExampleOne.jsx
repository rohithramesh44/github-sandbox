import { useRef } from "react";

function UseReffExampleOne() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control mb-2"
        />
        <button ex="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}

export default UseReffExampleOne;
