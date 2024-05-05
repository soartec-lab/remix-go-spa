import PetCreateFrom from "./pet-create-form";
import Pets from "./pets";

export default function PetsPage() {
	return (
		<div className="columns-1">
			<Pets />
			<PetCreateFrom />
		</div>
	);
}
