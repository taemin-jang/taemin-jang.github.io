import * as React from "react";

const Project1 = () => {
  return (
    <div className="relative">
      <div className=" before:bg-gradient-to-tr from-[#8A52A3] to-[#972B44] py-24 sm:py-52 before:content-[''] before:opacity-70 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Project
            </p>
            <div className="flex justify-around mt-4">
              <span class="inline-flex items-center rounded-md bg-primary-green px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/10">
                Movify (개인)
              </span>
              <span class="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/10">
                4this (팀)
              </span>
              <span class="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
                Interview System (팀)
              </span>
              <span class="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
                News Summary (개인)
              </span>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"></dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
