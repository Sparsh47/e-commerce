import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 mt-0 ">
          <div className="border">
            <p className="uppercase font-bold opacity-70 p-4 text-2xl">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold px-5">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-₹3419</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button
                variant="contained"
                className="w-[94%] mt-5"
                sx={{
                  my: "1rem",
                  px: "2.5rem",
                  py: "0.7rem",
                  bgcolor: "#9155fd",
                  ":hover": { bgcolor: "#4D2DB7" },
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
