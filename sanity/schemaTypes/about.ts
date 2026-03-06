import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Page Title" }),
    defineField({ name: "tagline", type: "string", title: "Hero Tagline" }),
    defineField({ name: "heroImage", type: "image", title: "Hero Image" }),

    defineField({ name: "chairpersonMessage", type: "text", title: "Chairperson Message" }),

    defineField({ name: "mission", type: "text", title: "Mission" }),
    defineField({ name: "vision", type: "text", title: "Vision" }),

    defineField({
      name: "focusAreas",
      title: "CSR Focus Areas",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", type: "string" },
          { name: "description", type: "text" }
        ]
      }]
    }),

    defineField({
      name: "stats",
      title: "Impact Metrics",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "number", type: "string" },
          { name: "label", type: "string" }
        ]
      }]
    }),

    defineField({
      name: "governance",
      type: "text",
      title: "Governance & Compliance"
    })
  ],
});