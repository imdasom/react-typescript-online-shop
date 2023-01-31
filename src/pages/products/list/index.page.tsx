import { useEffect, useState } from 'react';
import { ProductListItem } from '../../../repositories/products/types';
import ProductRepository from '../../../repositories/products/ProductRepository';

const ProductListPage = () => {
  const [productList, setProductList] = useState<ProductListItem[]>([]);

  useEffect(() => {
    setProductList(ProductRepository.select());
  }, []);

  return (
    <div>
      <h1>상품목록</h1>
      <a href={'/products/new'}>등록</a>
      <div>
        {productList?.map((product, index) => (
          <div key={index}>
            <a href={`/products/${product.id}`}>
              {product?.id} / {product?.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
