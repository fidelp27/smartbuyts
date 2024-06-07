// src/Components/ProductDetails/index.tsx
import React from 'react';
import {  ProductDetailsProps } from '../../Interfaces';
import { ImagesCard } from '../Card/ImagesCard';

export const ProductDetails: React.FC<ProductDetailsProps> = ({ title, price, description, img, category }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4">
      <div className="w-full mb-4">
        <ImagesCard images={img} />
      </div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">{title}</h1>
      <h2 className="text-lg font-medium text-gray-500 mb-4">{category}</h2>
      <p className="text-xl font-semibold text-slate-800 mb-4">${price}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};


