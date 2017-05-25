import { Order, OrderLine, Customer, Product, Shipping } from '../../app/model/interface';

export const FAKE_PRODUCT1: Product = {
  _id: "1",
  name: "Product 1",
  description: "Description 1",
  image: "Image 1",
  price: 100,
};

export const FAKE_PRODUCT2: Product = {
  _id: "2",
  name: "Product 2",
  description: "Description 2",
  image: "Image 2",
  price: 100,
};

export const PRODUCT_NOT_IN_CART: OrderLine = {
  product: {
    _id: "999",
    name: "Product 999",
    description: "Description 999",
    image: "Image 999",
    price: 999,
  },
  quantity: 0
};
export const MOCK_ITEMS: OrderLine[] = [{ product: FAKE_PRODUCT1, quantity: 1 }, { product: FAKE_PRODUCT2, quantity: 2 }];

export const MOCK_CUSTOMER1: Customer = {
  _id: "1",
  phone: "phone",
  country: "country",
  postnumber: "postnumber",
  address: "address",
  lastname: "lastname",
  firstname: "firstname",
}

export const MOCK_ORDER1: Order = {
  _id: "100",
  customer: MOCK_CUSTOMER1,
  total: 100,
  updatedAt: "0000",
  createdAt: "0000",
  items: MOCK_ITEMS,
}

export const MOCK_SHIPPING1: Shipping = {
  _id: "100",
  name: "name",
  description: "description",
  price: 100,
}

export const MOCK_SHIPPINGS: Shipping[] = [MOCK_SHIPPING1];
