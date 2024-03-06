const ProductCard = () => {
  return (
    <div
      className="flex flex-col rounded-lg bg-white mt-5 mb-5
       shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
        dark:bg-neutral-700 md:w-[460px] md:flex-row"
    >
      <img
        className="h-16 w-1/6 rounded-lg my-auto ml-2 items-center justify-center object-cover
           md:!rounded-none md:!rounded-lg"
        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
        alt=""
      />
      <div className="flex flex-col justify-start p-3">
        <h6 className="mb-2 text-xl font-normal text-neutral-800 dark:text-neutral-50">
          Navy Blue shoe 1.png
        </h6>

        <p className="text-xs text-neutral-500 dark:text-neutral-300">424kb</p>
      </div>
    </div>
  );
};

export default ProductCard;
