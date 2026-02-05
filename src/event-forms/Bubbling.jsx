export default function Bubbling() {
  return (
    <div onClick={() => console.log("Parent")}>
      <button onClick={() => console.log("Child")}>
        Click
      </button>
    </div>
  );
}
// When the button is clicked, "Child" will be logged first, followed by "Parent" due to event bubbling.
// Event bubbling is the process where an event starts from the deepest target element and propagates up to its ancestors.
// In this example, clicking the button triggers its onClick handler first, logging "Child", and then the click event bubbles up to the div, triggering its onClick handler and logging "Parent".
