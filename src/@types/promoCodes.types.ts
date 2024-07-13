export type PromoData = {
  discount: number;
  valid: boolean;
  name: string;
};

export type PromoCode = PromoData & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};
