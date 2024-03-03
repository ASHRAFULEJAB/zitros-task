import React, { useState } from "react";

const ProductCardUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(75);

  // Function to simulate upload progress
  const simulateUploadProgress = () => {
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 500);
  };

  // Function to handle delete button click
  const handleDelete = () => {
    // Implement delete logic here
  };

  return (
    <div>
      <div
        className="flex flex-1 rounded-lg bg-white mt-5 mb-4 
    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 
    w-[460px] md:flex-row"
      >
        <img
          className="h-16 w-1/6 rounded-lg my-auto ml-2 items-center justify-center object-cover
         md:!rounded-none md:!rounded-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex-1 justify-start p-4">
          <h6 className="mb-1 text-xl font-normal text-neutral-800 dark:text-neutral-50">
            Addidas shoe
          </h6>
          {/* <p className="text-xs text-neutral-500 dark:text-neutral-300">
          dvcv
        </p> */}
          {/* Upload progress bar */}
          {uploadProgress > 0 && (
            <div className="relative w-full">
              <div className="h-2 w-full bg-gray-300 rounded-full">
                <div
                  className="h-2 w-full bg-blue-500 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <span className=" mt-1  mr-1 text-xs text-gray-500">
                  {uploadProgress}% done
                </span>
                <span className="absolute top-2 right-0 mt-1  mr-1 text-xs text-gray-500">
                  124kbs
                </span>
              </div>
            </div>
          )}
          {/* Delete button */}
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="text-xs mx-auto text-red-500 font-semibold mt-2 lg:ml-[450px] focus:outline-none justify-end"
      >
        Cancel
      </button>
    </div>
  );
};

export default ProductCardUpload;
