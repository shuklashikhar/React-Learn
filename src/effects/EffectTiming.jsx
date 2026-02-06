import React from "react";
export default function EffectTiming({ value }) {
  console.log("render");

  React.useEffect(() => {
    console.log("effect");
  });

  return <p>{value}</p>;
}
