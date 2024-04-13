import { Outlet } from "@remix-run/react";

import PetCreateFrom from "./pet-create-form";
import Pets from "./pets";

export default function PetsPage() {
	return (
		<>
			<Pets />
			<PetCreateFrom />
			<Outlet />
		</>
	);
}
