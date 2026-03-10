import React from "react";

export const LearningGrid = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Typography</h2>
          <p className="text-sm">
            Control font sizes using classes like text-xs, text-sm and text-base.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Spacing</h2>
          <p className="text-sm">
            Manage padding and margins using utilities such as p-4, m-2 and gap-4.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Colors</h2>
          <p className="text-sm">
            Apply text and background colors using classes like text-blue-500 or bg-gray-100.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Flexbox</h2>
          <p className="text-sm">
            Arrange elements with flex utilities like flex, items-center and justify-between.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">Grid</h2>
          <p className="text-sm">
            Build layouts using grid utilities such as grid-cols-3 and gap-6.
          </p>
        </div>

      </div>

    </div>
  );
};