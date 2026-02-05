export default function SyntheticEvent() {
  const handleClick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
  };

  return <button onClick={handleClick}>Click</button>;
}
