import { Table } from "@radix-ui/themes";

import { useListPets } from "~/repositories/client/pets/pets";

export default function PetsTable() {
	const { data: petsData } = useListPets();

	return (
		<>
			<h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
				Pet list
			</h2>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>name</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{petsData?.data.map((pet) => (
						<Table.Row key={pet.id}>
							<Table.RowHeaderCell>{pet.id}</Table.RowHeaderCell>
							<Table.Cell>{pet.name}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</>
	);
}
