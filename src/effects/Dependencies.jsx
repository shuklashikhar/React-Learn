import React from "react";
export default function Dependencies() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("effect");
  });

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
}

// This component demonstrates how useEffect runs after every render, including the initial one. Each time the button is clicked, the count state updates, causing a re-render and triggering the effect again.
// If you want to run the effect only once (on mount), you can pass an empty dependency array: React.useEffect(() => { ... }, []).
// If you want to run the effect only when certain values change, you can pass those values in the dependency array: React.useEffect(() => { ... }, [count]).
// In this example, the effect will run after every render because no dependency array is provided.

