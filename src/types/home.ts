import type { GoodsItem } from "./layout";

interface bannerItem{
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

interface newItem{
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount: string|null;
  orderNum: string|null;
}

interface hotItem{
  id: string;
  picture: string;
  title: string;
  alt: string;
}

interface projectItem{
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: subProjectItem[];
  goods: GoodsItem[];
}

interface subProjectItem {
  id: string;
  name: string;
  layer: number;
  parent: string|null;
}

export type {
  bannerItem,
  newItem,
  hotItem,
  projectItem,
}
