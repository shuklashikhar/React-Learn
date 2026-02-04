import React from "react";
function expensiveCalculation() {
  console.log("expensive");
  return 100;
}

export default function LazyInit() {
  const [value, setValue] = React.useState(() =>expensiveCalculation());

  return (
    <button onClick={() => setValue(v => v + 1)}>
      {value}
    </button>
  );
}

// lazy initialization: passing a function to useState so that the expensive calculation runs only once during the initial render
