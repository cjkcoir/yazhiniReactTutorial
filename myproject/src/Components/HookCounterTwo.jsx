import { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (var i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <div className="text-center">
        count={count}
        <button
          className="btn btn-lg btn-primary me-2 ms-5"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          increment 1
        </button>
        <button
          className="btn btn-lg btn-secondary me-2"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          decrement 1
        </button>
        <button className="btn btn-lg btn-warning me-2" onClick={incrementFive}>
          increment 5
        </button>
        <button
          className="btn btn-lg btn-danger me-2"
          onClick={() => setCount(initialCount)}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default HookCounterTwo;
