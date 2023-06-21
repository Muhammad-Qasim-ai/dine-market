import { defineType, defineField } from "sanity"

export const classification = defineType({
    name: 'classification',
    title: 'Classification',
    type: 'document',
    fields: [
        defineField({
            name: 'classification',
            title: 'Product classification',
            type: 'string',
        })
    ]
}
)