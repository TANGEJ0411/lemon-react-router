import { Outlet } from "react-router-dom";
import LinkLayout from "./LinkLayout";

function LayoutComp() {
  return (
    <>
      <LinkLayout />
      <Outlet />
    </>
  );
}

export default LayoutComp;
