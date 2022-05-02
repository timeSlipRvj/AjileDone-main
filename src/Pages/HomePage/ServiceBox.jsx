import React from "react";

function ServiceBox({ content }) {
  return (
    <div className="relative m-4">
      <div className="before:content-[``] before:absolute before:border-2 before:border-dashed before:rounded-xl before:border-[#7387C3] before:bottom-3 before:left-3 before:w-full before:h-full  flex flex-col justify-center h-52 w-64 bg-[#45537C] items-center align-middle text-white rounded-xl z-10 before:z-[-10] ">
        <div className="flex title text-center">
          <h1 className="text-3xl font-black m-4">{content}</h1>
        </div>
      </div>
    </div>
  );
}

export default ServiceBox;
