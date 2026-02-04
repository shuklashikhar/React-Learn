import React from "react";
function Input({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}

function Display({ value }) {
  return <p>{value}</p>;
}

export default function LiftState() {
  const[value, setValue] = React.useState("");
    return (
        <>
        <Input value={value} onChange={setValue} />
        <Display value={value} />
        </>
    )
}
