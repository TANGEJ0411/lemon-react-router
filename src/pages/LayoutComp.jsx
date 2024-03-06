import { Outlet } from "react-router-dom";
import LinkLayout from "./LinkLayout";
import { useState } from "react";

function LayoutComp() {
  const [myState, setMyState] = useState("initial");

  return (
    <>
      <LinkLayout />
      <Outlet context={[myState, setMyState]} />
    </>
  );
}

export default LayoutComp;
