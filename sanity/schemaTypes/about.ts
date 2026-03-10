import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",

  fields: [

    // HERO
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string"
    }),

    defineField({
      name: "tagline",
      title: "Hero Tagline",
      type: "text"
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image"
    }),

    // ABOUT NGO
    defineField({
      name: "aboutText",
      title: "About NGO Description",
      type: "text"
    }),

    // PROBLEMS / WHY WORK MATTERS
    defineField({
      name: "problems",
      title: "Why Our Work Matters",
      type: "array",
      of: [{ type: "string" }]
    }),

    // MISSION
    defineField({
      name: "mission",
      title: "Mission",
      type: "text"
    }),

    // VISION
    defineField({
      name: "vision",
      title: "Vision",
      type: "text"
    }),

    // SERVICES
    defineField({
      name: "services",
      title: "What We Do",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Service Title" },
            { name: "description", type: "text", title: "Description" }
          ]
        }
      ]
    }),

    // IMPACT STATS
    defineField({
      name: "stats",
      title: "Impact Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string", title: "Number" },
            { name: "label", type: "string", title: "Label" }
          ]
        }
      ]
    }),

    // SUCCESS STORIES
    defineField({
      name: "stories",
      title: "Success Stories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "image", type: "image" }
          ]
        }
      ]
    }),

    // TRUST POINTS
    defineField({
      name: "trustPoints",
      title: "Why People Trust Us",
      type: "array",
      of: [{ type: "string" }]
    }),

    // FAQ
    defineField({
      name: "faqs",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string" },
            { name: "answer", type: "text" }
          ]
        }
      ]
    }),

    // GOVERNANCE
    defineField({
      name: "governance",
      title: "Governance & Compliance",
      type: "text"
    })
  ]
});