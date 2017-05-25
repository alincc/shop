interface Category {
  _id: String;
  name: String;
  image: String;
}

interface CartProduct {
  product: Product;
  quantity: number;
}

class ContactMessage {
  constructor(public name: String, public email: String, public message: String) { }
}

interface Customer {
  _id?: String;
  phone: String;
  country: String;
  postnumber: String;
  address: String;
  lastname: String;
  firstname: String;
}

interface OrderLine {
  product: Product;
  quantity: number;
}

interface Order {
  _id: String;
  // updatedAt: String;
  // createdAt: String;
  total: number;
  // items: Product[],
  items: OrderLine;
  customer?: Customer; // TODO: should not be optional
}

class Product {
  _id: String;
  category?: Category;
  category_id?: String;
  name: String;
  description: String;
  image: String;
  price: number;
}

export {
  Category,
  CartProduct,
  ContactMessage,
  Customer,
  OrderLine,
  Order,
  Product,
}
