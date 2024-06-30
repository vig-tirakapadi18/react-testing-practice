import React, { useState } from "react";

interface UseCounterProps {
  initialCount?: number;
}

const useCounter = ({ initialCount = 0 }: UseCounterProps) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return { count, increment, decrement };
};

export default useCounter;
