import { defineType, defineField } from "sanity";

export const jobPosting = defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Job Title", type: "string" }),
    defineField({ name: "dept", title: "Department", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "type", title: "Employment Type", type: "string" }),
    defineField({ name: "salary", title: "Salary Range", type: "string" }),
    defineField({ name: "stack", title: "Stack / Skills", type: "string" }),
  ],
});
