import { Button } from "~/components/ui/button";
import type { Pet as PetType } from "~/repositories/client/models";

type Props = {
	pet: PetType;
};

export default function Pet({ pet }: Props) {
	return (
		<div>
			<Button onClick={() => console.log("hellow")}>Click me</Button>
			<h1>Pet</h1>
			<p>Pet ID: {pet.id}</p>
		</div>
	);
}
