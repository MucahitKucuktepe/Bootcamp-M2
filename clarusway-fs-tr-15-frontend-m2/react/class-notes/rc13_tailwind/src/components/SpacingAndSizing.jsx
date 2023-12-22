import React from "react";

const SpacingAndSizing = () => {
  return (
    <>
      <div>
        <h3 className="text-2xl">Spacing And Sizing</h3>
        <button className="bg-blue-500 text-white p-3 m-4">Tıkla</button>
      </div>
      <div className="my-2">
        <button className="bg-green-500 text-white mx-4 py-2 px-4 border-[3px] border-red-600 rounded-md">
          Tıkla
        </button>
      </div>
      <div>
        <button className="w-20 bg-indigo-300 rounded-full py-3 mx-1 " >Tıkla</button>
        <button className="w-[330px] bg-indigo-300 rounded-full py-3 mx-1 " >Tıkla</button>
        <button className="max-w-lg min-w-[100px] w-[330px] bg-indigo-300 rounded-full py-3 mx-1 " >Tıkla</button>
      </div>
    </>
  );
};

export default SpacingAndSizing;
