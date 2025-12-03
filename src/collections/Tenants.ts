import { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },   // nome del negozio
    { name: 'slug', type: 'text', required: true },   // identificativo univoco
    { name: 'domain', type: 'text' },                 // opzionale
  ],
}
