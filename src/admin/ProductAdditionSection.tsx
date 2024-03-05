// ProductAdditionSection.tsx
import React from "react";
import ProductCard from "./ProductCard";
import ProductCardUpload from "./ProductCardWithUpload";
import ProductForm from "./ProductForm";
import { Button } from "../components/ui/button";
// import uploadPic from "../../assets/images/uploadpic.png";

interface Product {
  name: string;
  category: string;
  subCategory: string;
  price: number;
  description: string;
  tags: string[];
}

interface ProductAdditionProps {
  onPublish: () => void;
  onCancelUpload: () => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  product: Product;
  imageFiles: File[];
  uploadProgress: number[];
}

const ProductAdditionSection: React.FC<ProductAdditionProps> = () => {
  return (
    <div className="bg-white h-9/11 mb-6 w-5/6 p-4 mx-auto items-center justify-center mt-10 rounded-xl">
      <h1 className="my-3 text-xl">Add Product</h1>
      {/* Image Upload */}

      <div className="flex gap-3 mt-6">
        <div className="flex-1 border p-3 rounded-lg">
          {" "}
          <span>Add images</span>
          <div
            className="w-[460px]  relative border-2 mt-3 border-blue-400 border-dashed rounded-lg p-6"
            id="dropzone"
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 z-50"
              multiple
            />
            <div className="text-center">
              <img
                className="mx-auto h-36 w-12"
                src="https://www.svgrepo.com/show/357902/image-upload.svg"
                alt=""
              />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer"
                >
                  <span>Drop your files here</span>
                  <span className="text-indigo-600"> or Browse</span>
                  {/* <span> to upload</span> */}
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </h3>
              {/* <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p> */}
            </div>
            <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCardUpload />
        </div>
        {/* Product Details Form */}
        <div></div>
        <div className="mt-0 flex-1 border p-3 rounded-lg">
          <ProductForm></ProductForm>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 mt-4 
          rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Publish Product
        </Button>
      </div>
    </div>
  );
};

export default ProductAdditionSection;
