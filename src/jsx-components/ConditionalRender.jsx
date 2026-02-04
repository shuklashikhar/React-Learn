export default function ConditionalRender({ isLoggedIn, isAdmin }) {
  if (!isLoggedIn) {
    return <p>Please log in</p>;
  }

  return (
    <>
      <p>Welcome</p>
      {isAdmin && <p>Admin panel</p>}
      {isAdmin ? <p>Admin</p> : <p>User</p>}
    </>
  );
}
