// src/Components/OrderDetail/index.tsx
import React from 'react';
import { OrderProps, CartProps } from '../../Interfaces';

export const OrderDetail: React.FC<OrderProps> = ({ items, totalAmount, totalItems, createdAt, id }) => {    
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4">
      <h3 className="text-xs font-bold text-slate-800 mb-2">Id: {id} </h3>
      <h2 className="text-lg font-medium text-gray-500 mb-4">Created at: {new Date(createdAt).toLocaleDateString()}</h2>
      <h4 className="text-lg font-medium text-gray-500 mb-4">Total Items: {totalItems}</h4>
      <div className="w-full mb-4">
        {items.map((product: CartProps) => (          
          <div key={product.title} className="flex flex-col items-start justify-start p-4 bg-gray-100 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center" >
                <img src={!product.img[0].startsWith("[") ? product.img[0] : "https://i.imgur.com/PjwoJeu.jpeg"} alt={product.title} className="w-12 h-12 object-cover rounded-lg" />
                <h2 className="text-lg font-semibold text-slate-800 ml-2">{product.title}</h2>
            </div>
            <div className="flex justify-between w-full text-sm text-gray-700 mb-2">
              <span>Qty: {product.qty}</span>
              <span>Price: ${product.price}</span>
            </div>
            <div className="text-gray-900 font-semibold">
              Total: ${product.price * product.qty}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md border-t-2">
        <h2 className="text-lg font-semibold text-slate-800">Total Amount:</h2>
        <span className="text-xl font-bold text-gray-900">${totalAmount}</span>
      </div>
    </div>
  );
};
