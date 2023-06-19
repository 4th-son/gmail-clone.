import React from "react";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div
      className={`sidebarOption flex items-center h-10 px-4 rounded-tr-2xl rounded-br-2xl cursor-pointer text-gray-500 hover:bg-red-100 hover:text-red-600 hover:bold
      ${selected && "sidebarOption--active bg-red-100 text-red-600 font-bold"}
      }`}
    >
      <Icon className=" p-1" />
      <h3
        className={` ml-2 text-sm font-medium flex-1  ${
          selected && "sidebarOption--active bg-ed-100 text-red-600 font-bold"
        }`}
      >
        {title}
      </h3>
      <p
        className={` font-bold ${
          selected && "active bg-red-100 text-red-600 font-bold"
        }`}
      >
        {number}
      </p>
    </div>
  );
}

export default SidebarOption;
