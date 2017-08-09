import { normalize, schema } from 'normalizr';

export const categorySchema = new schema.Entity('categories', {}, { idAttribute: '_id' });

export const productSchema = new schema.Entity('products', {
  category: categorySchema,
}, { idAttribute: '_id' });
