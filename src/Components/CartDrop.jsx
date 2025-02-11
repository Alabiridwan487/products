import React from "react";
import { useSelector } from "react-redux";
import { clearCart } from "../redux/slices/CartSlices";
import { Link } from "react-router-dom";


const CartDrop = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  console.log(cartItems)

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg rounded-lg p-4 text-black">
      <h3 className="font-semibold text-lg">Cart Items</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">cart </p>
      ) : (
        <div className="max-h-64 overflow-y-auto">
          <ul>
          {cartItems.map((item, index) => (
            <>
              <li key={index} className="flex justify-between py-2 border-b">
                <span>{item?.title || "No Name"}</span>
                <span className="text-sm font-semibold">${item?.price || "0.00"}</span>
              </li>
            </>

          ))}
          <Link to={"/checkout"} className="block mt-4 bg-red-600 text-white py-2 text-center rounded-md">CHECKOUT...</Link >
        </ul>
        </div>
      )}

    </div>
  );
};

export default CartDrop;