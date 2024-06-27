import { useState } from "react";

const MouseInteractions = () => {
  const [counter, setCounter] = useState<number>(0);
  const [val, setVal] = useState<number>(0);

  return (
    <div>
      <h1>{counter}</h1>
      <input
        type="number"
        name="value"
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
      />
      <button onClick={() => setCounter((prevNum) => prevNum + 1)}>
        Increment
      </button>

      <button onClick={() => setCounter(val)}>Set</button>
    </div>
  );
};

export default MouseInteractions;
