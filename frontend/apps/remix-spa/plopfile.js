export default function (plop) {
	plop.setGenerator("remix-route-module", {
		description: "Create remix route or feature component",
		prompts: [
			{
				type: "list",
				name: "component-type",
				message: "which type of component you want to create?",
				choices: [
					{
						name: "route",
						value: "route",
					},
					{
						name: "feature",
						value: "feature",
					},
				],
			},
			{
				when: (data) => data["component-type"] === "route",
				type: "input",
				name: "route-name",
				message: `What is component name?

ex)

| URL          | component name    |
|--------------|-------------------|
| /users       | users._index      |
| /users/posts | users.posts_index |
| users/:id    | users.$id         |

?`,
				validate: (value) => {
					if (!value.includes(".")) {
						return "Error: route name pattern should be like '{resource}._index' or '{resource}.$id'";
					}

					return true;
				},
			},
			{
				when: (data) => data["component-type"] === "feature",
				type: "input",
				name: "feature-name",
				message: `What is component name?

ex)

- users._index/user-list
- users._index/create-form

?`,
				validate: (value) => {
					if (!value.includes(".")) {
						return "Error: feature name pattern should be like '{resource}._index/{feature-name}'";
					}

					return true;
				},
			},
		],
		actions: (data) => {
			switch (data["component-type"]) {
				case "route":
					return [
						{
							type: "add",
							path: "app/routes/{{route-name}}/route.tsx",
							templateFile: "./templates/route-component/template.tsx.hbs",
						},
						{
							type: "add",
							path: "app/routes/{{route-name}}/route.test.tsx",
							templateFile: "./templates/route-component/template.test.tsx.hbs",
						},
					];
				case "feature":
					return [
						{
							type: "add",
							path: "app/routes/{{feature-name}}.tsx",
							templateFile: "./templates/feature-component/template.tsx.hbs",
						},
						{
							type: "add",
							path: "app/routes/{{feature-name}}.test.tsx",
							templateFile:
								"./templates/feature-component/template.test.tsx.hbs",
						},
					];
				default:
					break;
			}
		},
	});
}
