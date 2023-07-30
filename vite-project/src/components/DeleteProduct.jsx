import React from "react";
import axios from "axios";
import { useState } from "react";

const DeleteProduct = () => {
  const [productid, setProductid] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
    await axios.delete(`https://outrageous-bonnet-ant.cyclic.app/product/${productid}`)
    alert("Product deleted successfully")  
    } catch (error) {
      console.log(error)
      alert("failed to delete product")      
    }
  };
 return (
  <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container p-5 bg-white rounded">
        <h2>Delete Product</h2>
        <form onSubmit={handleDelete}>
          <div className="mb-3">
            <label className="form-label">Product ID:</label>
            <input
              type="text"
              className="form-control"
              value={productid}
              onChange={(e) => setProductid(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">Delete</button>
        </form>
      </div>
    </div>
 );
};

export default DeleteProduct;
