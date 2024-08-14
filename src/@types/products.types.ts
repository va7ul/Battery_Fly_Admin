type BatteryCapacity = {
  description: string;
  price: number;
  holder?: number;
};

type BatteryConfig = {
  [key: string]: BatteryCapacity;
};

export type Product = {
  _id: string;
  codeOfGood: string;
  name: string;
  description: string;
  image: string[];
  price: number | string;
  quantity: number;
  sale: boolean;
  popular: boolean;
  category: string;
  type?: string;
  capacity?: BatteryConfig;
  holder?: boolean;
  information: string;
  createdAt: string;
  updatedAt: string;
  discount: number;
};

// export type oneProduct = {
//   result: {
// _id: string;
//   codeOfGood: string;
//   name: string;
//   description: string;
//   image: string[];
//   price: number | string;
//   quantity: number;
//   sale: boolean;
//   popular: boolean;
//   category: string;
//   type?: string;
//   capacity?: BatteryConfig;
//   holder?: boolean;
//   information: string;
//   createdAt: string;
//   updatedAt: string;
//     discount: number;
//   priceOneProduct?: number
//   }
  
// };

// export type Result1 = {
//   _id?: string;
//   codeOfGood?: string;
//   name?: string;
//   quantity?: number;
//   sale?: boolean;
//   popular?: boolean;
//   type?: string;
//   holder?: boolean;
//   createdAt?: string;
//   updatedAt?: string;
//   discount?: number;
//   description: string;
//   capacity?: BatteryConfig;
//   capacityKey?: string;
//   information: string;
//   price: string | number;
//   priceOneProduct: string | number;
//   image: string[];
// };

export type Result = {
  codeOfGood: string;
  name: string;
  quantity: number;
  sale: boolean;
  popular: boolean;
  type: string;
  discount: number;
  description: string;
  capacity?: BatteryConfig;
  capacityKey?: string;
  holder: boolean;
  information: string;
  price: string | number;
  priceOneProduct: string | number;
  image: string[] | File[];
  category: string;
};

export type AddProduct = {
  name: string;
  description: string;
  image: string[];
  price: number | string;
  quantity: number;
  sale: boolean;
  popular: boolean;
  category: string;
  type?: string;
  capacity?: BatteryConfig;
  holder?: boolean;
  information: string;
  discount: number;
};
