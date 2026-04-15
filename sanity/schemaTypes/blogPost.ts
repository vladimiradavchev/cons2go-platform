import { defineType, defineField } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Marketplace", "Guides", "Industry Analysis", "Success Stories", "Consultant Tips", "Product Updates"] },
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "author", title: "Author Name", type: "string" }),
    defineField({ name: "avatar", title: "Author Avatar Initials", type: "string" }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "readTime", title: "Read Time (e.g. '6 min read')", type: "string" }),
    defineField({ name: "body", title: "Content", type: "text", description: "Full article content" }),
  ],
  orderings: [{ name: "dateDesc", title: "Date (Newest First)", by: [{ field: "date", direction: "desc" }] }],
});
