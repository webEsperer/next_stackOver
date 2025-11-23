"use client";

import { AskQuestionSchema } from "@/lib/validation";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
// import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../input";
import { Button } from "../button";

const QuestionForm = () => {
  const form = useForm<z.infer<typeof AskQuestionSchema>>({
    resolver: standardSchemaResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateQuestion)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mt-2 flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="no-focus rounded-1.5 min-h-12 border paragraph-regular text-dark300_light700 light-border-2 background-light900_dark300"
                />
              </FormControl>
              <FormDescription className="mt-2.5 text-light-500 body-regular">
                Be specific and imagine you&apos;re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>Editor</FormControl>
              <FormDescription className="mt-2.5 text-light-500 body-regular">
                Introduce the problem and expand on what you&apos;ve put in the title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    className="background-light700_dark300 no-focus min-h-[56px] border paragraph-regular text-dark300_light700 light-border-2"
                    placeholder="Add tags..."
                    {...field}
                  />
                  Tags
                </div>
              </FormControl>
              <FormDescription className="mt-2.5 text-light-500 body-regular">
                Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-16 flex justify-end">
          <Button type="submit" className="w-fit !text-light-900 primary-gradient">
            Ask A Question
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default QuestionForm;
