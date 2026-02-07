import React from "react";
export default function NoRerender() {
  const refValue = React.useRef(0);
  const [stateValue, setStateValue] = React.useState(0);

  console.log("render", refValue.current);

  return (
    <>
      <button onClick={() => refValue.current++}>
        Update ref
      </button>
      <button onClick={() => setStateValue(v => v + 1)}>
        Update state
      </button>
      <p>{stateValue}</p>
    </>
  );
}
