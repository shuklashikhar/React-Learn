import React from "react";
export default function ListKeys() {
  const [items, setItems] = React.useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
  ]);

  return (
    <>
      <button onClick={() => setItems(items.slice(1))}>
        Remove first
      </button>

      {items.map((item) => (
        <input key={item.id} defaultValue={item.text} />
      ))}
    </>
  );
}
