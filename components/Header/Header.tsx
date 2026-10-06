import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import BottomHeader from "./BottomHeader/BottomHeader";

export default function Header() {
  return (
    <div className=" sticky top-0 z-50 bg-white">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
  );
}
