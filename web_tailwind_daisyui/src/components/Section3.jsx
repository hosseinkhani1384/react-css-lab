import React from "react";
import allimg from "../img_section3.json";
export default function Section3() {
  return (
    <section className="px-10 sm:px-20 md:px-36 lg:px-48">
      <p className="text-center font-medium">Works with your technologies</p>
      <div className="flex justify-evenly mt-10">
        {allimg.map((data,index) => {
          return (
            <img
              src={data.srcimg}
              alt=""
              className="hover:scale-125 active:scale-125 transition-all "
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
