import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";

export default function Header() {
  return (
    <div>
      <TopHeader />
      <MiddleHeader />
      <p>bottom header</p>
    </div>
  );
}
