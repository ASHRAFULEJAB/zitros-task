import React, { useState } from "react";
import { Button } from "../ui/button";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    subcategory: "",
    price: "",
    description: "",
    tags: ["Sneaker", "Shoe", "Footwear", "Sneaker", "Shoe", "Footwear"], // Demo tags initially inside the input field
  });

  const categories = ["Men", "Women", "Kids"]; // Sample categories
  const subcategories = {
    Men: ["Shoes", "Clothing", "Accessories"],
    Women: ["Shoes", "Clothing", "Accessories"],
    Kids: ["Shoes", "Clothing", "Toys"],
  }; // Sample subcategories based on category

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-4">
        <label htmlFor="productName" className="block font-semibold mb-1">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          placeholder="Enter product name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold mb-1">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="subcategory" className="block font-semibold mb-1">
          Subcategory
        </label>
        <select
          id="subcategory"
          name="subcategory"
          value={formData.subcategory}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select subcategory</option>
          {formData.category &&
            subcategories[formData.category].map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block font-semibold mb-1">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
           focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
           focus:border-blue-500"
          rows="4"
        ></textarea>
      </div>
      <label htmlFor="description" className="block font-semibold mb-1">
        Tags
      </label>
      <div className="mb-4 flex flex-wrap p-4 border bg-white border-gray-300 rounded-md ">
        {formData.tags.map((tag, index) => (
          <div key={index} className="mr-2 mb-2">
            <button
              type="button"
              className="border border-gray-300 bg-gray-100 rounded-md px-3 py-1 flex items-center"
            >
              <span className="mr-2">{tag}</span>
              <button
                type="button"
                onClick={() => handleTagRemove(tag)}
                className="text-gray-400 hover:text-red-600 focus:outline-none"
              >
                &times;
              </button>
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Publish Product
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
