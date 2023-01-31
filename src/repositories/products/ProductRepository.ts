import dayjs from 'dayjs';
import {
  Maybe,
  NewProductRequest,
  ProductDetail,
  ProductListItem,
  UpdateProductRequest,
} from './types';

const STORAGE_KEY = 'FORM_LEVEL_2_PRODUCT_LIST';

const ProductRepository = {
  select: function (): ProductListItem[] {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      return [];
    }
    return JSON.parse(item);
  },
  selectById: function (id: number): Maybe<ProductDetail> {
    const list = this.select();
    return list.find((product) => product.id === id);
  },
  update: function (id: number, newProduct: UpdateProductRequest) {
    const list = this.select();
    for (let i = 0; i < list.length; i++) {
      if (list[i].id !== id) continue;
      const oldProduct = list[i];
      if (!oldProduct)
        throw new Error(
          JSON.stringify({ statusCode: 400, message: 'NOT_FOUND' })
        );
      if (newProduct.name) oldProduct.name = newProduct.name;
      if (newProduct.category) oldProduct.category = newProduct.category;
      if (newProduct.price) oldProduct.price = newProduct.price;
      if (newProduct.imageUrls) oldProduct.imageUrls = newProduct.imageUrls;
      if (newProduct.status) oldProduct.status = newProduct.status;
      oldProduct.updatedAt = dayjs().format('YYYYMMDDHHmmss');
      break;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  },
  delete: function (id: number) {
    const list = this.select().filter((product) => product.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  },
  create: function (product: NewProductRequest) {
    if (!product.name)
      throw new Error(
        JSON.stringify({ statusCode: 400, message: 'NAME_REQUIRED' })
      );
    if (!product.category)
      throw new Error(
        JSON.stringify({ statusCode: 400, message: 'CATEGORY_REQUIRED' })
      );
    if (!product.imageUrls)
      throw new Error(
        JSON.stringify({ statusCode: 400, message: 'IMAGE_URLS_REQUIRED' })
      );
    if (!product.price)
      throw new Error(
        JSON.stringify({ statusCode: 400, message: 'PRICE_REQUIRED' })
      );
    if (!product.status)
      throw new Error(
        JSON.stringify({ statusCode: 400, message: 'STATUS_REQUIRED' })
      );

    const createdAt = dayjs().format('YYYYMMDDHHmmss');
    const newProduct = {
      id: new Date().getTime(),
      createdAt: createdAt,
      updatedAt: createdAt,
      ...product,
    };
    const list = this.select();
    list.push(newProduct);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return newProduct;
  },
};

export default ProductRepository;
