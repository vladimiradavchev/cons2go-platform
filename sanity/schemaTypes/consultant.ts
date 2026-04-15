import { defineType, defineField } from "sanity";

export const consultant = defineType({
  name: "consultant",
  title: "Consultant",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "rating", title: "Rating", type: "number" }),
    defineField({ name: "reviews", title: "Reviews Count", type: "number" }),
    defineField({ name: "price", title: "Price per Hour ($)", type: "number" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "available", title: "Available", type: "boolean" }),
    defineField({ name: "expertise", title: "Expertise", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "avatar", title: "Avatar Initials", type: "string" }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "clients", title: "Clients Count", type: "number" }),
    defineField({ name: "responseRate", title: "Response Rate", type: "string" }),
    defineField({ name: "avgResponse", title: "Avg Response Time", type: "string" }),
    defineField({ name: "languages", title: "Languages", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
    defineField({ name: "completedProjects", title: "Completed Projects", type: "number" }),
    defineField({ name: "specialization", title: "Specialization", type: "string" }),
  ],
});
