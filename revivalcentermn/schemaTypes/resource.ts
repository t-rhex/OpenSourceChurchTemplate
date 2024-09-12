import { defineType, defineField, defineArrayMember } from 'sanity'

export const resource = defineType({
  type: "document",
  name: "resource",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "file",
      name: "file",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
  ],
});

