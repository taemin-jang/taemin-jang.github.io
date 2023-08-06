import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project1 = () => {
  return (
    <div className="relative">
      <div className=" before:bg-gradient-to-tr from-[#8A52A3] to-[#972B44] py-20 sm:py-44 before:content-[''] before:opacity-70 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Movify
              <span>
                <a
                  href="https://github.com/taemin-jang/Movie_Vue"
                  target="blank"
                >
                  <StaticImage
                    src="../../images/GitHub-Mark.png"
                    width={40}
                    height={40}
                    className="rounded-3xl ml-3 mt-1"
                  />
                </a>
                <a
                  href="https://superb-entremet-0f24f9.netlify.app/"
                  target="blank"
                  className="ml-3 p-2 text-xl font-semibold bg-black rounded-xl text-white"
                >
                  Demo
                </a>
              </span>
            </p>
          </div>
          <div className="max-w-full mt-10 -mb-10 flex justify-evenly boder-solid border-white border-4 rounded-3xl">
            <StaticImage
              src="../../images/projects/movify_태블릿_목업_투명.png"
              width={600}
              height={600}
              className="mx-auto drop-shadow-shadowRD"
            />
            <div className="py-40 pr-4">
              <h4 className="text-base font-semibold leading-7 text-gray-900">
                JavaScript와 Vue.js 공부한 내용 복습 및 TMDB API를 활용하여 영화
                소개 사이트 제작
              </h4>
              <h4 className="text-base font-semibold leading-7 mt-3 text-gray-900">
                2022.07 ~ 2022.08 (개인)
              </h4>
              <div className="mt-3">
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-vue px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Vue
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-js px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
                  JavaScript
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-html px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  HTML
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-css px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  CSS
                </span>
              </div>
              <div className="text-base leading-8 text-gray-900 mt-3">
                <p>- TMDB API를 활용한 영화 사이트 개발.</p>
                <p>- RAF(RequestAnimationFrame)를 이용하여 카운트 기능 구현.</p>
                <p>- TMDB API를 활용해 검색 기능 구현.</p>
                <p>- Axios를 사용하여 HTTP 통신.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
