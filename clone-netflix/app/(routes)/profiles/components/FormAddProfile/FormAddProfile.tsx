"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAddProfileProps } from "./FormAddProfile.type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddProfile.form";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export function FormAddProfile(props: FormAddProfileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileName: "",
      avatarUrl: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/userNetflix", values);
      if (response.status !== 200) {
        toast({
          title: "Ops! Ha ocurrido un error",
          variant: "destructive",
        });
      } else {
        toast({
          title: "¡Usuario creado correctamente!",
        });
      }
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast({ title: "Ops! Ha ocurrido un error", variant: "destructive" });

      setIsLoading(false);
    }
  };

  const { setOpen } = props;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
