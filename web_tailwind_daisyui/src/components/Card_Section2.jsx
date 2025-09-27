import React from "react";

export default function Card_Section2({ srcimg ,header,description}) {
  return (
    <div className="p-10 hover:shadow-xl mb-10 flex gap-2 transition-all duration-300">
      <div>
        <img src={srcimg} alt="" className="w-36" />
      </div>
      <div>
        <h4 className="text-xl font-medium">{header}</h4>
        <p className="text-gray text-sm">{description}</p>
      </div>
    </div>
  );
}
