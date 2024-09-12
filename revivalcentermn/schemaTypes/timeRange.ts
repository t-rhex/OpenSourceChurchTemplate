import { defineType, defineField } from 'sanity'

export const timeRange = defineType({
  type: "object",
  name: "timeRange",
  fields: [
    defineField({
      type: "string",
      name: "day",
      options: {
        list: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
    }),
    defineField({
      type: "string",
      name: "start",
    }),
    defineField({
      type: "string",
      name: "end",
    }),
  ],
});

