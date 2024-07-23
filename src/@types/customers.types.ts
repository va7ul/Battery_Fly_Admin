export type Customer = {
  _id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  tel: string;
  email: string;
  verifiedEmail: boolean;
  delivery: { city: string; warehouse: string };
  favorites: string[];
  promoCodes: string[];
  orders: number[];
  createdAt: string;
  updatedAt: string;
};
