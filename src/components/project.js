import * as React from "react";

const Project = () => {
  return (
    <div>
      <div className=" bg-gradient-to-tr from-[#8A52A3] to-[#972B44]  py-24 sm:py-52">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Project
            </p>
            <div className="flex justify-around mt-4">
              <span class="inline-flex items-center rounded-md bg-primary-green_bg px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/10">
                Movify (개인)
              </span>
              <span class="inline-flex items-center rounded-md bg-primary-green_bg px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/10">
                4this (팀)
              </span>
              <span class="inline-flex items-center rounded-md bg-primary-green_bg px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
                Interview System (팀)
              </span>
              <span class="inline-flex items-center rounded-md bg-primary-green_bg px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
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

export default Project;
