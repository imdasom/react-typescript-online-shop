export type Maybe<T> = T | null | undefined;

export type ProductStatus = 'READY' | 'ON_SALE' | 'SALE_END';

export type Category = 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';

export type ProductListItem = {
  id: number;
  name: string;
  category: Category;
  price: number;
  imageUrls: string[];
  status: ProductStatus;
  createdAt: string; // YYYYMMDDHHmmss
  updatedAt: string; // YYYYMMDDHHmmss
};

export type ProductDetail = ProductListItem;

export type NewProductRequest = {
  name: string;
  category: Category;
  price: number;
  imageUrls: string[];
  status: ProductStatus;
};

export type UpdateProductRequest = NewProductRequest;
