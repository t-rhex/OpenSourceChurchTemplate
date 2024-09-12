import { defineType, defineField, defineArrayMember } from 'sanity'

export const sermon = defineType({
  type: "document",
  name: "sermon",
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
      type: "string",
      name: "preacher",
    }),
    defineField({
      type: "datetime",
      name: "date",
    }),
    defineField({
      type: "file",
      name: "audio",
    }),
    defineField({
      type: "url",
      name: "video",
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

