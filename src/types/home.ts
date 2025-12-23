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
export type {
  bannerItem,
  newItem
}
