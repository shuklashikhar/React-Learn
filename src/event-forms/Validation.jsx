import React from "react";
export default function Validation() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
    }
  };

  return (
    <>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validate}
      />
      {error && <p>{error}</p>}
    </>
  );
}
