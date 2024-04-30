import { useLoaderData } from "@remix-run/react";

import type { Pet as PetType } from "~/repositories/client/models";
import { showPetById } from "~/repositories/client/pets/pets";

import Pet from "./pet";

export async function clientLoader({ params }: { params: { id: string } }) {
	const pet = await showPetById(params.id, { page: "1" });

	return pet.data as PetType;
}

export default function PetPage() {
	const pet = useLoaderData<typeof clientLoader>();

	return <Pet pet={pet} />;
}
