import React from "react";
function PreviousValue({ value }) {
  const prev = React.useRef(value);

  React.useEffect(() => {
    prev.current = value;
  });

  return (
    <p>
      Current: {value} | Previous: {prev.current}
    </p>
  );
}
export default PreviousValue;
// The above code defines a React component called PreviousValue that takes a prop called value. It uses the useRef hook to create a mutable ref object called prev, which is initialized with the value prop. The useEffect hook is used to update the current property of the prev ref to the latest value whenever the component re-renders. The component renders a paragraph that displays both the current value and the previous value stored in the prev ref.