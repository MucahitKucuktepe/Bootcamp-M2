import React from "react";

const HoverFocus = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  return (
    <div>
      <button className="w-40 bg-sky-400 hover:bg-sky-500 text-slate-50 rounded-full shadow-slate-400 hover:shadow-lg">
        Save
      </button>
      <button
        type="button"
        className="text-white bg-yellow-400 py-2 mx-1 rounded-full px-2 focus:outline-red-700"
      >
        Yellow
      </button>
      <div>
        <input
          type="email"
          className="border-gray-300 text-slate-900 rounded-lg focus:outline-red-400 peer"
        />

        <p className="invisible peer-invalid:visible">
          Please provide valid email
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-5">
        {arr.map((item, i) => (
          <div key={i} className="bg-teal-500">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverFocus;
