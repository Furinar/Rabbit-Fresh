interface GoodsItem {
  id: string;
  name: string;
  desc: string;
  picture: string;
  discount: string | null;
  price: string;
  orderNum: string | null;
}

interface CategoryItem {
  id: string;
  name: string;
  picture: string;
  children: CategoryItem[] | null;
  goods: GoodsItem[] | null;
}

export type {
  CategoryItem,
  GoodsItem,
}
