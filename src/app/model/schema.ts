import { normalize, schema } from 'normalizr';

export const categorySchema = new schema.Entity('categories', {}, { idAttribute: '_id' });

export const optionTypeSchema = new schema.Entity('optionTypes', {}, { idAttribute: '_id' });

export const optionValueSchema = new schema.Entity('optionValues', {}, { idAttribute: '_id' });

export const variantSchema = new schema.Entity('variants', {
  options: [optionValueSchema],
}, { idAttribute: '_id' });


export const productSchema = new schema.Entity('products', {
  category: categorySchema,
  variants: [variantSchema],
  optionTypes: [optionTypeSchema],
}, { idAttribute: '_id' });

export const lineSchema = new schema.Entity('lines', {
  product: productSchema,
}, { idAttribute: '_id' });

export const orderSchema = new schema.Entity('orders', {
  items: [lineSchema]
}, { idAttribute: '_id' });

export const carrierSchema = new schema.Entity('carriers', {}, { idAttribute: '_id' });

export const userSchema = new schema.Entity('users', {
  orders: [orderSchema],
}, { idAttribute: '_id' });

export const paymentSchema = new schema.Entity('payments', {}, { idAttribute: '_id' });
