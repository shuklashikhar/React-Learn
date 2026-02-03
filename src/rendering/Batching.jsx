import React from "react";
export default function BatchingDemo() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  console.log("Render");

  const update = () => {
    setA(1);
    setB(2);
  };

  return <button onClick={update}>Update</button>;
}
