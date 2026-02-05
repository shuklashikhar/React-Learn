export default function Propagation() {
  return (
    <div onClick={() => console.log("Parent")}>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("Child");
        }}
      >
        Click
      </button>

      

    </div>
  );
}
