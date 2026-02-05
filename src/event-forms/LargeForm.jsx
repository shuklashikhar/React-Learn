import React from "react";
export default function LargeForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  const update = (field, value) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));
    console.log("Updated:", field, value);
  };

  return (
    <>
      <input
        value={form.name}
        onChange={e => update("name", e.target.value)}
      />
      <input
        value={form.email}
        onChange={e => update("email", e.target.value)}
      />
    </>
  );
}
