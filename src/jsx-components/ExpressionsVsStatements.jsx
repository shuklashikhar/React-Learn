export default function ExpressionsVsStatements() {
  const numbers = [1, 2, 3];

  return (
    <ul>
      {numbers.map(n => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}
// expressions: produce values and can be used inside JSX curly braces
// statements: perform actions and cannot be used inside JSX curly braces