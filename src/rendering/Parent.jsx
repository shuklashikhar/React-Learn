import React from "react";
export default function Parent() {
  console.log("Parent render");

  const [value, setValue] = React.useState(0);

  return (
    <>
      <button onClick={() => setValue(v => v + 1)}>Update Parent</button>
      <Child />
    </>
  );
}

function Child() {
  console.log("Child render");
  return <p>Child</p>;
}
