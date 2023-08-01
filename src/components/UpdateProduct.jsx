import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const UpdateProduct = () => {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateproduct = {productId, name, price, description}
      await axios.put(`https://outrageous-bonnet-ant.cyclic.app/product/${productId}`, updateproduct)
      alert("Product updated successfully")

    } catch (error) {
      console.log(error)
      alert("failed to update product")     
    }
  }



 return (<div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container p-5 bg-white rounded">
        <h2>Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product ID:</label>
            <input
              type="text"
              className="form-control"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
 );
};

export default UpdateProduct;
