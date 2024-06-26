import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "~/components/shadcn-ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/shadcn-ui/form";
import { Input } from "~/components/shadcn-ui/input";
import { Toaster } from "~/components/shadcn-ui/toaster";
import { useToast } from "~/components/shadcn-ui/use-toast";
import {
	type CreatePetsMutationResult,
	useCreatePets,
} from "~/repositories/client/pets/pets";
import { createPetsBodyItem } from "~/repositories/client/pets/pets.zod";

export default function PetCreateFrom() {
	const { toast } = useToast();
	const { trigger } = useCreatePets();

	const options = {
		onSuccess(data: CreatePetsMutationResult) {
			toast({
				title: "create pet success !",
				description: "create pet success description.",
			});
		},
	};

	const onSubmit = (values: z.infer<typeof createPetsBodyItem>) => {
		trigger([values], options);
	};

	const form = useForm<z.infer<typeof createPetsBodyItem>>({
		resolver: zodResolver(createPetsBodyItem),
		defaultValues: {
			id: 1,
			name: "pet name",
			tag: "tag",
		},
	});

	return (
		<>
			<h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
				Pet create form
			</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="id"
						render={({ field }) => (
							<FormItem>
								<FormLabel>id</FormLabel>
								<FormControl>
									<Input type="number" placeholder="please input" {...field} />
								</FormControl>
								<FormDescription>This is your pet id.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>name</FormLabel>
								<FormControl>
									<Input placeholder="please input" {...field} />
								</FormControl>
								<FormDescription>This is your pet name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="tag"
						render={({ field }) => (
							<FormItem>
								<FormLabel>tag</FormLabel>
								<FormControl>
									<Input placeholder="please input" {...field} />
								</FormControl>
								<FormDescription>This is your pet tag.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>

			<Toaster />
		</>
	);
}
