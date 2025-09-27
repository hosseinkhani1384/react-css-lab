import React from "react";

export default function Section4() {
  return (
    <section className="px-10 sm:px-20 md:px-36 mt-10">
      <div className="w-full bg-black text-white p-5 sm:p-10 lg:p-20 py-20 rounded-xl flex items-center gap-10 flex-col">
        <h2 className="text-2xl  md:text-4xl  xl:text-6xl text-center">
          Build faster websites
        </h2>
        <p>
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture
        </p>
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
}
