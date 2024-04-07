import { useParams } from "@remix-run/react";

import Pet from "./pet";

export default function PetPage() {
	const params = useParams();
	const id = params.id;

	return <Pet id={id} />;
}
