import React from "react";
export default function Layout({ header, footer, children }) {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
}
