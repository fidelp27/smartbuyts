import React, { useContext } from "react";
import { CartItemsProps, CartProps } from "../../Interfaces";
import { ContextApp } from "../../Context";

export const AsideCartItems: React.FC<CartItemsProps> = ({ items }) => {
  const { openedAsideCart, totalAmountCart } = useContext(ContextApp);

  return (
    <>
      {openedAsideCart && items.map((product: CartProps) => (
        <div key={product.title} className="flex flex-col items-start justify-start p-4 bg-gray-100 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-semibold text-slate-800">{product.title}</h2>
          <div className="flex justify-between w-full text-sm text-gray-700 mb-2">
            <span>Qty: {product.qty}</span>
            <span>Price: ${product.price}</span>
          </div>
          <div className="text-gray-900 font-semibold">
            Total: ${product.price * product.qty}
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mt-4 mb-16">
        <h2 className="text-lg font-semibold text-slate-800">Total Amount:</h2>
        <span className="text-xl font-bold text-gray-900">${totalAmountCart(items)}</span>
      </div>
    </>
  );
};
