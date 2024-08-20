import { useState } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-center">
        <div className="h2 text-primary">HookCounter</div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase counter {count}
        </button>
      </div>
    </>
  );
}

export default HookCounter;
