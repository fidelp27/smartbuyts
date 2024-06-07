import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";

import { CartItemsProps, CartProps } from "../../Interfaces";
import { ContextApp } from "../../Context";

export const AsideCartItems: React.FC<CartItemsProps> = ({ items }) => {
  const { openedAsideCart, totalAmountCart, removeFromCart, addOrder } = useContext(ContextApp);

  return (
    <>
      {openedAsideCart && items.length > 0 ? items.map((product: CartProps) => (
        <div key={product.title} className="flex flex-col items-start justify-start p-4 bg-gray-100 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center w-full " >
            <img src={!product.img[0].startsWith("[")?product.img[0]:"https://i.imgur.com/PjwoJeu.jpeg"} alt={product.title} className="w-12 h-12 object-cover rounded-lg" />
            <h2 className="text-lg w-7 font-semibold text-slate-800">{product.title}</h2>
            <MdDelete className="text-red-500 hover:text-red-700 transition duration-300 cursor-pointer" onClick={() => removeFromCart(product)}/>
        </div>
          <div className="flex justify-between w-full text-sm text-gray-700 mb-2 mt-2">
            <span>Qty: {product.qty}</span>
            <span>Price: ${product.price}</span>
          </div>
          <div className="text-gray-900 font-semibold mt-2">
            Total: ${product.price * product.qty}
          </div>
        </div>
      )): 
        <div className="flex justify-center items-center h-96"> 
            <h1 className="text-2xl font-bold text-gray-500">No items in the cart</h1> 
        </div>}
       {items.length > 0 && 
      <>
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mt-4 mb-1">
        <h2 className="text-lg font-semibold text-slate-800">Total Amount:</h2>
        <span className="text-xl font-bold text-gray-900">${totalAmountCart(items)}</span>
      </div>
      <div className="flex justify-center items-center w-full">
        <button className="w-full bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-slate-900 transition duration-300 mb-16" 
        onClick={()=>addOrder(items, totalAmountCart(items), items.length)} disabled={items.length === 0} >
          Checkout
        </button>
      </div>
      </>
      }
      </>
  );
};
