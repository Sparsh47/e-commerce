import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md m-5">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] object-top">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20230524/shT2/646e3154d55b7d0c63d62212/-473Wx593H-460789301-blue-MODEL.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller: Crishtaliyo 2fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-10">
            <p className="font-semibold ">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon sx={{ color: "red" }} />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <AddCircleOutlineIcon sx={{ color: "rgb(145, 85, 253)" }} />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "rgb(145, 85, 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
