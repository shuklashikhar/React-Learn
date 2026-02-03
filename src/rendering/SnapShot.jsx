import React from "react";
export default function SnapshotDemo() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(c => c + 1);
    setCount(c => c + 1); 
    console.log(count);
  };

  return <button onClick={handleClick}>{count}</button>;
}
