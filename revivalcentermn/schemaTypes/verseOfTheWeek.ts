import { defineType, defineField, defineArrayMember } from 'sanity'

export const verseOfTheWeek = defineType({
  type: "document",
  name: "verseOfTheWeek",
  fields: [
    defineField({
      type: "string",
      name: "verse",
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
  ],
});

