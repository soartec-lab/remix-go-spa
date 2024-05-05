import { Outlet } from "@remix-run/react";

export default function PetsLayout() {
	return (
		<div className="flex justify-center">
			<Outlet />
		</div>
	);
}
