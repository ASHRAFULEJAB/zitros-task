/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
interface ProductFormProps {
  formData: {
    productName: string;
    superCategory: string;
    category: string;
    subcategory: string;
    price: string;
    description: string;
    tags: string[];
  };
  handleInputChange: (name: string, value: string) => void;
  handleTagRemove: (tagToRemove: string) => void;
  handleTagInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ProductForm: React.FC<ProductFormProps> = ({
  formData,
  handleInputChange,
  handleTagRemove,
  handleTagInputChange,
}) => {
  const [supercategories, setSuperCategories] = useState(["Men", "Women", "Kids"]);
  const [categories, setCategories] = useState(["Men", "Women", "Kids"]);
  const [subcategories, setSubcategories] = useState({
    Men: ["Shoes", "Clothing", "Accessories"],
    Women: ["Shoes", "Clothing", "Accessories"],
    Kids: ["Shoes", "Clothing", "Toys"],
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
          required
          name="productName"
          placeholder="Enter product name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold mb-1">
          Super Category
        </label>
        <select
          id="supercategory"
          name="supercategory"
          value={formData.superCategory}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select category</option>
          {supercategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
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
            subcategories[formData.category].map((subcategory: string) => (
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
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
        {/* <input
          type="text"
          placeholder="Add tag"
          className="border border-gray-300 bg-gray-100 rounded-md px-3 py-1"
          onChange={handleTagInputChange}
        /> */}
      </div>
      {/* <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button> */}
    </form>
  );
};

export default ProductForm;
