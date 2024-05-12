export default function (plop) {
	plop.setGenerator("create-remix-route-component", {
		description: "Create remix route or feature component",
		prompts: [
			{
				type: "list",
				name: "component-type",
				message: "which type of component you want to create?",
				choices: [
					{
						name: "route from URL path",
						value: "url-route",
					},
					{
						name: "route from file path",
						value: "file-route",
					},
					{
						name: "feature",
						value: "feature",
					},
				],
			},
			{
				when: (data) => data["component-type"] === "url-route",
				type: "input",
				name: "route-path",
				message: `What is url path?

ex)

| URL you need to input | route file path    | create component name |
|-----------------------|--------------------|-----------------------|
| /users                | users._index       | UsersRoute            |
| /users/posts          | users.posts._index | UsersPostsRoute       |
| users/:id             | users.$id          | UserRoute             |

?`,
				validate: (value) => {
					if (value.includes(".")) {
						return "Error: url pattern should be like 'users/posts' or 'users/:id'";
					}

					return true;
				},
			},
			{
				when: (data) => data["component-type"] === "file-route",
				type: "input",
				name: "route-path",
				message: `What is route path?

ex)

| URL          | route you need to input | create component name |
|--------------|-------------------------|-----------------------|
| /users       | users._index            | UsersRoute            |
| /users/posts | users.posts._index      | UsersPostsRoute       |
| users/:id    | users.$id               | UserRoute             |

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
				name: "feature-path",
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
				case "url-route": {
					plop.setHelper("route-component", (text) => {
						const paths = text.split("/");

						const componentName = paths
							.map((path, index) => {
								if (paths[index + 1] && paths[index + 1].startsWith(":")) {
									return path.slice(0, -1);
								}
							})
							.join("-");

						return `${componentName}-route`;
					});

					const urlPaths = data["route-path"].split("/");
					const endPath = urlPaths.at(-1);

					let routeFilePath = urlPaths.map((path) => path.replace(":", "$"));
					if (!endPath.startsWith(":")) {
						routeFilePath.push("_index");
					}

					routeFilePath = routeFilePath.join(".");

					return [
						{
							type: "add",
							path: `app/routes/${routeFilePath}/route.tsx`,
							templateFile: "./templates/route-component/template.tsx.hbs",
						},
						{
							type: "add",
							path: `app/routes/${routeFilePath}/route.test.tsx`,
							templateFile: "./templates/route-component/template.test.tsx.hbs",
						},
					];
				}
				case "file-route":
					plop.setHelper("route-component", (text) => {
						const paths = text.split(".");

						const componentName = paths
							.map((path, index) => {
								if (paths[index + 1] && paths[index + 1].startsWith("$")) {
									return path.slice(0, -1);
								}
								if (path === "_index" || path.startsWith("$")) {
									return "";
								}
								return path;
							})
							.join("-");

						return `${componentName}-route`;
					});

					return [
						{
							type: "add",
							path: "app/routes/{{route-path}}/route.tsx",
							templateFile: "./templates/route-component/template.tsx.hbs",
						},
						{
							type: "add",
							path: "app/routes/{{route-path}}/route.test.tsx",
							templateFile: "./templates/route-component/template.test.tsx.hbs",
						},
					];
				case "feature":
					plop.setHelper("feature-component", (text) => text.split("/").pop());

					return [
						{
							type: "add",
							path: "app/routes/{{feature-path}}.tsx",
							templateFile: "./templates/feature-component/template.tsx.hbs",
						},
						{
							type: "add",
							path: "app/routes/{{feature-path}}.test.tsx",
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
