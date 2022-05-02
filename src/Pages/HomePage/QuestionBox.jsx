import React from "react";

function QuestionBox({ content }) {
  return (
    <div className="flex flex-col px-8 py-4 w-[460px] w-96 m-8 rounded-xl bg-[#BFC9FF]">
      <div className="text-center font-black text-6xl text-[#45537C] uppercase">
        QUESTION
      </div>
      <div className="relative float-right">
        <div className="absolute top-0 right-8 font-bold text-lg text-[#7387C3]">
          for your company
        </div>
      </div>
      <div className="mt-10 text-md font-medium text-white">{content}</div>
    </div>
  );
}

export default QuestionBox;
