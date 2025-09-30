import React from "react";
import TextType from "./TextType";
export default function Section1() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mb-14 px-4 sm:px-4 md:px-20">
      <div className="flex flex-col justify-center items-center md:items-start gap-8 w-full lg:w-7/12 order-2 lg:order-1">
        <span  className="font-bold text-3xl md:text-6xl md:text-start text-center">Scalable Apps with frameworks</span>

        <TextType
          text={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorevoluptate et neque earum iste hic consequatur nulla deserunt architecto numquam",
          ]}
          typingSpeed={20}
          pauseDuration={500}
          showCursor={true}
          cursorCharacter=""
          textColors={"black"}
          className="text-lg md:text-2xl text-center md:text-start"
        />
        <div className="flex flex-col md:flex-row justify-start items-center gap-3 w-full">
          <button className="btn btn-neutral w-full md:w-auto">
            Download for Free
          </button>
          <button className="btn w-full md:w-auto">Github Repo</button>
        </div>
      </div>

      <div className="order-1 lg:order-2 w-full lg:w-5/12 flex justify-center">
        <img
          src="/images/hero-source.svg"
          alt=""
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
