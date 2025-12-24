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
  categories: categories[] | null;
  brands: brand[] | null;
  saleProperties: saleProperties[] | null;
}

interface brand{
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  desc: string;
  picture: string;
  type: string | null;
}

interface categories{
  id: string;
  name: string;
  layer: number;
  parent: string | null;
}

interface saleProperties{
  id: string;
  name: string;
}
export type {
  category,
  subCategory,
}
