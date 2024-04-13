import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { createPetsBodyItem } from "~/repositories/client/zod/pets/pets"
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

export default function PetCreateFrom() {
  const form = useForm<z.infer<typeof createPetsBodyItem>>({
    resolver: zodResolver(createPetsBodyItem),
    defaultValues: {
      id: 1,
      name: "pet name",
      tag: "tag",
    },
  })

  const onSubmit = (values: z.infer<typeof createPetsBodyItem>) => {
    console.log(values)
  }

	return (
    <>
      <h1 className="tw-scroll-m-20 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-lg:text-5xl">
        Create Pet Form
      </h1>
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>id</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="please input" {...field} {...form.register("id", { valueAsNumber: true })}/>
                </FormControl>
                <FormDescription>
                  This is your pet id.
                </FormDescription>
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
                <FormDescription>
                  This is your pet name.
                </FormDescription>
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
                <FormDescription>
                  This is your pet tag.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
	);
}
