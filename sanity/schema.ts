import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'

import { classification } from './classification'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, classification],
}
