import React from "react";
export default function AsyncState() {
  const [value, setValue] = React.useState(0);

  const update = () => {
    setValue(10);
    console.log("Immediately:", value);
  };

  return <button onClick={update}>Set 10</button>;
}
