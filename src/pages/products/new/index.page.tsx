import ProductRepository from '../../../repositories/products/ProductRepository';

const NewProductPage = () => {
  const handleCancel = () => {
    window.location.href = '/products';
  };

  const handleSubmit = () => {
    ProductRepository.create({
      name: '상품명',
      category: 'CATEGORY1',
      status: 'READY',
      price: 10000,
      imageUrls: ['https://picsum.photos/200/300'],
    });
    window.location.href = '/products';
  };

  return (
    <div>
      <h1>상품등록</h1>
      <table className="content">
        <tbody>
          <tr>
            <th>상품명</th>
            <td>
              <input type="text" className="name" />
            </td>
          </tr>
          <tr>
            <th>상태</th>
            <td className="form-item left">
              <div className="form-radio">
                <input
                  type="radio"
                  className="status"
                  name="status"
                  value="READY"
                  id="status-READY"
                  checked={true}
                />
                <label htmlFor="status-READY">판매대기</label>
              </div>
              <div className="form-radio">
                <input
                  type="radio"
                  className="status"
                  name="status"
                  value="ON_SALE"
                  id="status-ON_SALE"
                  checked={false}
                />
                <label htmlFor="status-ON_SALE">판매중</label>
              </div>
              <div className="form-radio">
                <input
                  type="radio"
                  className="status"
                  name="status"
                  value="SALE_END"
                  id="status-SALE_END"
                />
                <label htmlFor="status-SALE_END">판매종료</label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={handleCancel}>취소</button>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};

export default NewProductPage;
