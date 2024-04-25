import { defineConfig } from "orval";

export default defineConfig({
	remixSpa: {
		input: {
			target: "../../../openapi/merged/openapi/openapi.yaml",
		},
		output: {
			mode: "tags-split",
			target: "app/repositories/client",
			schemas: "app/repositories/client/models",
			// NOTE: ローカル開発環境で`mock`サーバーを起動しているときは`baseUrl`を変更する
			baseUrl: "http://localhost:8081",
			client: "swr",
			clean: true,
			biome: true,
			mock: {
				type: "msw",
				delay: 0,
			},
		},
	},
	remixSpaZod: {
		input: {
			target: "../../../openapi/merged/openapi/openapi.yaml",
		},
		output: {
			mode: "tags-split",
			client: "zod",
			target: "app/repositories/client",
			fileExtension: ".zod.ts",
			biome: true,
			override: {
				zod: {
					strict: {
						response: true,
						query: true,
						param: true,
						header: true,
						body: true,
					},
					coerce: {
						response: true,
						query: true,
						param: true,
						header: true,
						body: true,
					},
				},
			},
		},
	},
});
