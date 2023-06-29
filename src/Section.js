import React from "react";

function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section flex items-center p-4 min-w-min w-60 cursor-pointer text-gray-500 border-b-0 hover:bg-zinc-200 hover:border-2  ${
        selected && "section--selected bg-zinc-200 border-4"
      }`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4 className="font-semibold ml-2 ">{title}</h4>
    </div>
  );
}

export default Section;
