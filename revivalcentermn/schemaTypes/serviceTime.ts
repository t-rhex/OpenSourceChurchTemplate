import { defineType, defineField, defineArrayMember } from 'sanity'

export const serviceTime = defineType({
  type: "document",
  name: "serviceTime",
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
      type: "array",
      name: "times",
      of: [
        defineArrayMember({
          type: "timeRange",
        }),
      ],
    }),
  ],
});

