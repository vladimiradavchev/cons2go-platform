import { defineType, defineField } from "sanity";

export const problem = defineType({
  name: "problem",
  title: "Problem",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "budget", title: "Budget Range", type: "string" }),
    defineField({ name: "proposals", title: "Proposals Count", type: "number" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Open", "In Progress", "Awarded", "Closed"] },
    }),
    defineField({ name: "desc", title: "Description", type: "text" }),
    defineField({ name: "author", title: "Author Initials", type: "string" }),
    defineField({ name: "companyName", title: "Company Name", type: "string" }),
    defineField({ name: "timeAgo", title: "Time Ago", type: "string" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
  ],
});
