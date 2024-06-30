interface MockingFunctionsProps {
  count: number;
  incrementHandler?: () => void;
  decrementHandler?: () => void;
}

const MockingFunctions = (props: MockingFunctionsProps) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>{props.count}</p>

      {props.incrementHandler && (
        <button onClick={props.incrementHandler}>Increment</button>
      )}

      {props.decrementHandler && (
        <button onClick={props.decrementHandler}>Decrement</button>
      )}
    </div>
  );
};

export default MockingFunctions;
