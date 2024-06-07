// src/Pages/Orders/index.tsx
import React, { useContext } from 'react';
import { ContextApp } from '../../Context';
import { Layout } from '../../Components/LayoutProducts';
import { OrderProps } from '../../Interfaces';


export const Orders: React.FC = () => {
  const { orders } = useContext(ContextApp);

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-slate-800 mb-6">My Orders</h1>
      <div className="flex flex-wrap w-4/5 gap-4 h-52 items-center cursor-pointer">
        {orders && orders.map((order: OrderProps) => (
          <div key={order.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-sm font-semibold text-gray-700 mb-2 mt-2">Order #{order.id}</h2>
            <p className="text-gray-600 mb-2 text-sm">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2 text-sm">Total Items: {order.totalItems}</p>
            <p className="text-gray-600 mb-2 text-sm">Total Amount: ${order.totalAmount.toFixed(2)}</p>            
          </div>
        ))}
        {orders.length === 0 && <h1 className="text-2xl font-semibold text-gray-500">No orders yet</h1>}
      </div>
    </Layout>
  );
};

export default Orders;
