import React from "react";
export default function Cleanup() {
  const [on, setOn] = React.useState(true);

  React.useEffect(() => {
    console.log("effect start");

    return () => {
      console.log("cleanup");
    };
  }, [on]);

  return (
    <button onClick={() => setOn(o => !o)}>
      Toggle
    </button>
  );
}
// This component demonstrates how the cleanup function in useEffect works. Each time the "Toggle" button is clicked, the "on" state toggles between true and false, causing the effect to run again. Before the new effect runs, the cleanup function from the previous effect is executed, logging "cleanup" to the console. This allows you to see when the effect is being cleaned up before it runs again.