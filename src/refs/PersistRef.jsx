import React from "react";
export default function PersistRef() {
  const renderCount = React.useRef(0);
  renderCount.current++;

  console.log("renders:", renderCount.current);

  const [, force] = React.useState(0);

  return (
    <button >
      Force render
    </button>
  );
}
