import React from "react";

function WorkBox({ head, foot, num }) {
  return (
    <div>
      <div className="flex flex-col w-40 m-4">
        <div className="text-center my-2 text-sm text-[#878787]">{head}</div>
        <div className="flex w-40 h-40 rounded-full border-dashed border-2 border-[#0B30E9] justify-center items-center">
          <div className="flex text-2xl text-black">{num}</div>
        </div>
        <div className="text-center my-2 text-black text-sm">{foot}</div>
      </div>
    </div>
  );
}

export default WorkBox;
