import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Product Management</Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update">
                  Update Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delete">
                  Delete Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/check">
                  Check All Products
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/delete" element={<DeleteProduct />} />
            <Route path="/checkAllProducts" element={<CheckAllProducts />} />
            {/* Add a default route */}
            <Route path="*" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
