"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,

    FormField,
    FormItem,

    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formSchema } from "./LoginForm.form"
import { useState } from "react"
import { FormError } from "./formError"




export  function LoginForm() {
  const [error, setError] = useState<string | undefined>("")
 // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit =(values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return  (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Correo Electronico" {...field} className="h-14 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} className="h-14 text-white" />
              </FormControl>
         
              <FormMessage />
            </FormItem>
          )}
        />
       <FormError message={error}/>
        <Button type="submit" className="w-full bg-[#E50914]">Iniciar Sesison</Button>
      </form>
    </Form>
  )
}
