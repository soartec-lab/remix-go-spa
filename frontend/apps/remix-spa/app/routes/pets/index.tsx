import { Outlet } from "@remix-run/react";

import Pets from "./pets"

export default function PetsPage() {
  return (
    <>
      <Pets />
      <Outlet />
    </>
  );
}