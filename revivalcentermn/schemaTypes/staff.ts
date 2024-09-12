import { defineType, defineField, defineArrayMember } from 'sanity'

export const staff = defineType({
  type: "document",
  name: "staff",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "name" },
    }),
    defineField({
      type: "string",
      name: "position",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "bio",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      type: "string",
      name: "email",
    }),
    defineField({
      type: "string",
      name: "phone",
    }),
    defineField({
      type: "array",
      name: "social",
      of: [
        defineArrayMember({
          type: "social",
        }),
      ],
    }),
  ],
});

