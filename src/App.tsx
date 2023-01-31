import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/products/list/index.page';
import NewProductPage from './pages/products/new/index.page';
import EditProductPage from './pages/products/edit/index.page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductListPage />}></Route>
        <Route path="/products/new" element={<NewProductPage />}></Route>
        <Route path="/products/:id" element={<EditProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
