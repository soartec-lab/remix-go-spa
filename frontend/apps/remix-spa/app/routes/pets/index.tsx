import { Outlet } from "@remix-run/react";

import Pets from "./pets";
import PetCreateFrom from "./pet-create-form";

export default function PetsPage() {
	return (
		<>
			<Pets />
			<PetCreateFrom />
			<Outlet />
		</>
	);
}
