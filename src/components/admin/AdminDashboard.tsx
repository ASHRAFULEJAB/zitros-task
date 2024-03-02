// AdminDashboard.tsx
import React, { useState } from "react";

import ProductAdditionSection from "./ProductAdditionSection";
import UserAccountInfo from "./UserAccountInfo";
import NavigationMenu from "./NavigationSidebar";

interface Product {
  name: string;
  category: string;
  subCategory: string;
  price: number;
  description: string;
  tags: string[];
}

const initialProductState: Product = {
  name: "Navy Blue Sneakers Shoe",
  category: "Men",
  subCategory: "Shoe",
  price: 175,
  description: "",
  tags: [],
};

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [product, setProduct] = useState<Product>(initialProductState);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImageFiles(files);

    const progressArray = Array(files.length).fill(0);
    setUploadProgress(progressArray);

    // Simulating image upload progress
    files.forEach((file, index) => {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const updatedProgress = [...prevProgress];
          updatedProgress[index] += 10; // Increase progress by 10%
          if (updatedProgress[index] >= 100) {
            clearInterval(interval);
          }
          return updatedProgress;
        });
      }, 1000); // Adjust the interval as needed
    });
  };

  const handleCancelUpload = () => {
    // Implement cancellation logic here
  };

  const handlePublishProduct = () => {
    // Implement product submission logic here
  };

  return (
    <div className="flex h-full">
      <NavigationMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex-1">
        <UserAccountInfo
          username="Ismail Hossain"
          designation="Senior Accountant"
        />
        <ProductAdditionSection
          onPublish={handlePublishProduct}
          onCancelUpload={handleCancelUpload}
          onInputChange={handleInputChange}
          onImageUpload={handleImageUpload}
          product={product}
          imageFiles={imageFiles}
          uploadProgress={uploadProgress}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
