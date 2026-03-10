import React from "react";

export const ProductCard = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-lg shadow-lg p-6 w-80">

        <img
          src="https://picsum.photos/400/250"
          alt="Product"
          className="rounded-lg mb-4"
        />

        <h1 className="text-xl font-bold mb-2">
          Pro Headphones
        </h1>

        <p className="text-green-600 mb-4">
          $199
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buy Now
        </button>

      </div>

    </div>
  );
};