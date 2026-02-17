import React from "react";
export function UserContainer() {
  const [user, setUser] = React.useState({ name: "Shikhar" });
  return <UserView user={user} />;
}

function UserView({ user }) {
  return <p>{user.name}</p>;
}
