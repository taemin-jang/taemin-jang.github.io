import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Project1 = () => {
  return (
    <div id="project" className="relative">
      <div className=" before:bg-white py-24 sm:py-40 before:content-[''] before:opacity-70 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="no text-base font-semibold leading-7 text-indigo-600">
              Project
            </h2>
            <p className="no mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              News Summary
              <a
                href="https://github.com/taemin-jang/news_summary_frontend"
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
                href="https://github.com/taemin-jang/news_summary_backend"
                target="blank"
              >
                <StaticImage
                  src="../../images/GitHub-Mark.png"
                  width={40}
                  height={40}
                  className="rounded-3xl ml-3 mt-1"
                />
              </a>
            </p>
          </div>
          <div className="relative max-w-full mt-10 -mb-10 flex justify-evenly boder-solid border-black border-4 rounded-3xl">
            <div className="group">
              <StaticImage
                src="../../images/projects/NewsSummary_태블릿_목업.png"
                width={600}
                height={600}
                className="transition duration-700 ease-in-out -ml-20 mr-10 drop-shadow-shadowRD group-hover:-translate-x-10 group-hover:-translate-y-10"
              />
              <StaticImage
                src="../../images/projects/NewsSummary_태블릿_목업2.png"
                width={600}
                height={600}
                className="!absolute transition duration-700 ease-in-out drop-shadow-shadowRD group-hover:-z-10 group-hover:translate-x-10 group-hover:translate-y-10 -left-8 bottom-8"
              />
            </div>
            <div className="pt-20 w-1/2">
              <h4 className="text-base font-semibold leading-7 text-gray-900">
                주식 포트폴리오에 등록된 관련 뉴스만 제공해주는 플랫폼
              </h4>
              <h4 className="text-base font-semibold leading-7 mt-3 text-gray-900">
                2023.04 ~ 2023.06 (개인)
              </h4>
              <div className="mt-3">
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-vue px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Vue
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-vuetify px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Vuetify
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-js px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
                  JavaScript
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-ts px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  TypeScript
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-express px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Express
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-html px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  HTML
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-css px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  CSS
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-git px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Git
                </span>
              </div>
              <div className="text-base leading-7 text-gray-900 mt-3">
                <p className="no">
                  - 카카오 OAuth 기능으로 간편하게 로그인 가능.
                </p>
                <p className="no">
                  - Pinia 상태관리 라이브러리를 도입해 props 복잡도 개선.
                </p>
                <p className="no">
                  - Vuetify의 theme을 활용하여 다크모드 구현.
                </p>
                <p className="no">- 사용자 편의를 위해 무한 스크롤 구현.</p>
                <p className="no">
                  - 포트폴리오에 등록된 주식마다 금융위원회 API로 최근 5일간의
                  종가를 시각적으로 표현하기 위해 차트로 구현.
                </p>
                <p className="no">
                  - 금융위원회 주식시세정보 Open API를 사용하여 주식
                  포트폴리오에 주식 등록 및 삭제 가능.
                </p>
                <p className="no">
                  - 등록된 포트폴리오를 기반으로 Naver Search API를 사용하여
                  뉴스 기사 제공.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
