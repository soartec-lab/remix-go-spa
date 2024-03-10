import { Table } from '@radix-ui/themes';

import { useListPets } from '~/repositories/client/pets/pets'

export default function Pets() {
  const { data: petsData } = useListPets();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>name</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
    
      <Table.Body>
        { petsData && petsData.data.map((pet) => (
          <Table.Row>
            <Table.RowHeaderCell>{pet.id}</Table.RowHeaderCell>
            <Table.Cell>{pet.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}