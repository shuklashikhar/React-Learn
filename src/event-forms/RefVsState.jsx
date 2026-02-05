import React from "react";
export function RefVsState() {
  const refCount = React.useRef(0);
  const [stateCount, setStateCount] = React.useState(0);

  const incrementRef = () => {
    refCount.current += 1;
    console.log("ref:", refCount.current);
  };

  const incrementState = () => {
    setStateCount(c => c + 1);
  };

  console.log("render");

  return (
    <>
      <button onClick={incrementRef}>Ref +</button>
      <button onClick={incrementState}>State +</button>
      <p>{stateCount}</p>
    </>
  );
}
