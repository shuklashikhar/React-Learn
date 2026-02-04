import React from "react";
function DuplicateState() {
  const [count, setCount] = React.useState(0);
  const double = count * 2;

  const increment = () => {
    setCount(c => c + 1);
    
  };

  return <>
  <p>{count} / {double}</p>
  <button onClick={increment}>Increment</button>
  </> 
}
export default DuplicateState;