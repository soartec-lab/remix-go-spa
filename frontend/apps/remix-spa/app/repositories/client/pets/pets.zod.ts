/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { z as zod } from "zod";

/**
 * @summary List all pets
 */
export const listPetsQueryLimitMax = 100;

export const listPetsQueryParams = zod
	.object({
		limit: zod.coerce.number().max(listPetsQueryLimitMax).nullish(),
	})
	.strict();

export const listPetsResponseItem = zod
	.object({
		id: zod.coerce.number(),
		name: zod.coerce.string(),
		tag: zod.coerce.string().optional(),
	})
	.strict();
export const listPetsResponse = zod.array(listPetsResponseItem);

/**
 * @summary Create a pet
 */
export const createPetsBodyItem = zod
	.object({
		id: zod.coerce.number(),
		name: zod.coerce.string(),
		tag: zod.coerce.string().optional(),
	})
	.strict();
export const createPetsBody = zod.array(createPetsBodyItem);

/**
 * @summary Info for a specific pet
 */
export const showPetByIdParams = zod
	.object({
		petId: zod.coerce.string(),
	})
	.strict();

export const showPetByIdQueryParams = zod
	.object({
		page: zod.coerce.string(),
	})
	.strict();

export const showPetByIdResponse = zod
	.object({
		id: zod.coerce.number(),
		name: zod.coerce.string(),
		tag: zod.coerce.string().optional(),
	})
	.strict();
