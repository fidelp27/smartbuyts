import React from 'react';
import { CardProps } from '../../Interfaces';
import { ImagesCard } from './ImagesCard';

export const Card: React.FC<CardProps> = ({ title, price, img, category }) => {
  return (
    <div className="bg-white cursor-pointer w-64 h-90 rounded-lg hover:shadow-slate-100 transition-shadow duration-500 group">
      <figure className="relative mb-2 w-full h-3/4 overflow-hidden rounded-t-lg">
        <ImagesCard images={!img[0].startsWith("[") ? img : ['https://i.imgur.com/fei1sMg.png']}/>
        <figcaption className="absolute bottom-2 left-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
          {category}
        </figcaption>
      </figure>
      <div className="px-4 py-2">
        <div className="flex justify-between items-center mb-2 h-7">
          <span className="text-md font-medium w-70 mr-4 text-sm">{title}</span>
          <span className="text-lg font-semibold text-slate-900">${price}</span>
        </div>        
      </div>
      <button className="bg-slate-900 text-white w-full py-2 rounded-b-lg hover:bg-slate-800 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
