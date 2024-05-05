import PetCreateFrom from "./pet-create-form";
import PetsTable from "./pets-table";

export default function PetsPage() {
	return (
		<div className="columns-1">
			<PetsTable />
			<PetCreateFrom />
		</div>
	);
}
