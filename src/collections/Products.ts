import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: 'products',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        placeholder: 'Inserisci un prezzo valido '
      }
    }
  ]
}