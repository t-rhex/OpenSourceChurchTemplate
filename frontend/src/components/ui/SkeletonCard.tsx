import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
      <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
      <div className="h-10 bg-gray-200 rounded-full w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
