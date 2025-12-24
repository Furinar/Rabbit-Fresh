import type { GoodsItem } from "./layout";

interface category{
  id: string;
  name: string;
  picture: string|null;
  children: subCategory[] | null;
}

interface subCategory{
  id: string;
  name: string;
  picture: string;
  parentId: string;
  parentName: string;
  goods: GoodsItem[] | null;
  categories: string|null;
  brands: string | null;
  saleProperties: string | null;
}

export type {
  category,
  subCategory,
}
