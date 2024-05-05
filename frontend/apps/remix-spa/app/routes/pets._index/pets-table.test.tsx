import { afterAll, afterEach, beforeAll, describe, expect, it } from "bun:test";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { SWRConfig } from "swr";

import type { Pets } from "~/repositories/client/models";
import { getListPetsMockHandler } from "~/repositories/client/pets/pets.msw";
import PetsTable from "./pets-table";

const server = setupServer();

beforeAll(() => {
	server.listen();
});
afterEach(() => {
	server.resetHandlers();
	cleanup();
});
afterAll(() => server.close());

describe("Pets", () => {
	it("should render a table with the pets data", async () => {
		const pets: Pets = [{ id: 1, name: "pet1" }];

		const mock = [getListPetsMockHandler(pets)];

		server.use(...mock);

		render(
			<SWRConfig value={{ provider: () => new Map() }}>
				<PetsTable />
			</SWRConfig>,
		);

		await waitFor(() => {
			screen.getByText("id");
		});

		expect(screen.getByText("id")).toBeTruthy();
		expect(screen.getByText("name")).toBeTruthy();
		expect(screen.getByText("1")).toBeTruthy();
		expect(screen.getByText("pet1")).toBeTruthy();
	});
});
