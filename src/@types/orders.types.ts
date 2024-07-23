export type CartItem = {
  _id: string;
  codeOfGood: string;
  name: string;
  description: string;
  image: string[];
  price: number;
  quantity: number;
  sale: boolean;
  popular: boolean;
  category: string;
  type: string;
  information: string;
  discount: number;
  capacityKey: string;
  selectedSealing: boolean;
  selectedHolder: boolean;
  quantityOrdered: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type Order = {
  _id: string;
  status: string;
  numberOfOrder: string;
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
  tel: string;
  total: number;
  promoCode: string;
  promoCodeDiscount: number;
  discountValue: number;
  together: number;
  cartItems: CartItem[];
  deliveryType: string;
  city: string;
  warehouse: string;
  payment: string;
  createdAt: string;
};

export type Aplication = {
  _id: string;
  numberOfApplication: number;
  name: string;
  tel: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
};

export type QuickOrder = {
  _id: string;
  numberOfOrder: number;
  codeOfGood: string;
  name: string;
  tel: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
};

export type Print3D = {
  _id: string;
  numberOfOrder: number;
  userName: string;
  tel: string;
  text: string;
  accuracy: string;
  plactic: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteItemData = {
  totalPrice: number;
  codeOfGood: string;
  capacityKey: string;
  selectedSealing: boolean;
  selectedHolder: boolean;
};
