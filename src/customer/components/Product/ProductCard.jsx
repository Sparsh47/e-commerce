import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="w-full">
        <img
          src={product.imageUrl}
          alt=""
          className="max-h-[20rem] w-full object-cover object-left-top"
        />
      </div>
      <div className="text">
        <div className="textPart p-3 bg-white">
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50 px-[5px]">{product.price}</p>
          <p className="text-green-600 font-semibold px-[5px]">
            {product.discountPercent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
