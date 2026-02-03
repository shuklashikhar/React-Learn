import React from "react";
export default function Predict() {
  console.log("Parent");

  const [x, setX] = React.useState(0);

  return (
    <>
      <button onClick={() => setX(x => x)}>Same value</button>
      <Child />
    </>
  );
}

function Child() {
  console.log("Child");
  return null;
}


// if the next state is the same as the current state, React will skip re-rendering the component and its children.