import {
  Order,
  OrderLine,
  Customer,
  Product,
  User,
  Shipping,
  ShippingStatus
} from '../../app/model/interface';



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
  email: 'email',
  city: 'city',
  postnumber: "postnumber",
  address: "address",
  lastname: "lastname",
  firstname: "firstname",
  orders: [],
};

export const FAKE_USER1: User = {
  _id: "1",
  admin: false,
  username: "john",
  password: "doe",
  email: "johndoe@email.com",
  ip: "212.213.12.2",
  customer: MOCK_CUSTOMER1,
};

export const MOCK_SHIPPING1: Shipping = {
  _id: "100",
  name: "name",
  description: "description",
  price: 100,
}

export const MOCK_ORDER1 = new Order({
    _id: "100",
    updatedAt: "0000",
    createdAt: "0000",
    total: 100,
    status: ShippingStatus.Pending,
    items: MOCK_ITEMS,
    customer: MOCK_CUSTOMER1,
    shipping: MOCK_SHIPPING1
});


export const MOCK_SHIPPINGS: Shipping[] = [MOCK_SHIPPING1];
