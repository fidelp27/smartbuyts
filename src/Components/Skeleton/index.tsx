import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-gray-200 animate-pulse w-64 h-90 rounded-lg flex flex-col justify-between p-4">
      <div className="bg-gray-300 h-48 w-full rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 mb-2"></div>
      <div className="bg-gray-300 h-6 w-1/4 mb-2"></div>
    </div>
  );
};
