import { defineType, defineField } from "sanity";

export default defineType({
  name: "kathabout",
  title: "Katha About",
  type: "document",
  fields: [

    defineField({
      name: "title",
      title: "Page Title",
      type: "string"
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image"
    }),

    // COUNTERS
    defineField({
      name: "stats",
      title: "Counters",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "number" },
            { name: "label", type: "string" }
          ]
        }
      ]
    }),

    // TIMELINE
    defineField({
      name: "timeline",
      title: "Katha Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "year", type: "string" },
            { name: "place", type: "string" }
          ]
        }
      ]
    }),

    // EVENTS
    defineField({
      name: "events",
      title: "Katha Events",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "place", type: "string" },
            { name: "year", type: "string" },
            { name: "devotees", type: "string" }
          ]
        }
      ]
    }),

    // GALLERY
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image" }]
    }),

    // VIDEO
    defineField({
      name: "videoUrl",
      title: "YouTube Video URL",
      type: "url"
    })

  ]
});