import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Hero = () => {
  return (
    <div id="home">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-32 sm:pb-48 lg:pb-56 flex justify-between">
          <div className="text-left gap-8 max-w-3xl sm:pt-20 lg:pt-20">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              안녕하세요!
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              프론트엔드 개발자
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-primary-green">장태민</span>입니다.
            </h1>
            <div className="bg-primary-green_bg rounded-xl p-3 mt-4">
              <p className="text-lg leading-8 text-gray-900 font-bold">
                이메일 | ttaemni@gmail.com
              </p>
              <p className="text-lg leading-8 text-gray-900 font-bold">
                연락처 | 010-5681-3051
              </p>
              <StaticImage
                src="../images/GitHub-Mark.png"
                width={40}
                height={40}
                className="rounded-3xl mt-1"
              />
            </div>
          </div>
          <div>
            <StaticImage
              src="../images/JangTaemin2.png"
              width={600}
              height={600}
              className="drop-shadow-customRD"
            ></StaticImage>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#A4BC9C] to-[#8CA68B] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
