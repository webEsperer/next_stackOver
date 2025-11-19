"use client";

import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{success: boolean}>
}

const AuthForm = <T extends FieldValues>({ schema, defaultValues, formType, onSubmit }: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: standardSchemaResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";
  const handleSubmit: SubmitHandler<T> = async() => {}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2.5 w-full mt-2">
                <FormLabel className="paragraph-medium text-dark400_light700">{field.name === 'email' ? 'Email Address' : field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormLabel>
                <FormControl>
                  <Input type={field.name === 'password' ? 'password' : 'text'} {...field}  className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"/>
                </FormControl>
                <FormMessage />
              </FormItem>)}
          />
        ))}

        <Button type="submit" className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900">{buttonText}</Button>
      </form>
    </Form>
  );
};

export default AuthForm;
