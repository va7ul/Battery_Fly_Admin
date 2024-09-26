export type HeroData = {
_id: string;
  image: string;
  text: string
};

export type HeroItem = HeroData & {
  createdAt: string;
  updatedAt: string;
};