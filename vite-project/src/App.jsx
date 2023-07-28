import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import AddProduct from './components/AddProduct.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import DeleteProduct from './components/DeleteProduct.jsx';
import CheckAllProducts from './components/CheckAllProducts.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<AddProduct></AddProduct>} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/delete-product" element={<DeleteProduct />} />
            <Route path="/check-all-products" element={<CheckAllProducts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
