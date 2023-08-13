import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Project2 = () => {
  return (
    <div className="relative">
      <div className=" before:bg-primary-project2 py-24 sm:py-40 before:content-['']  before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="no mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              4this HomePage
              <a
                href="https://github.com/taemin-jang/4thIS_Page_FE"
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
                href="http://fourthis.cafe24.com/"
                target="blank"
                className="no ml-3 p-2 text-xl font-semibold bg-black rounded-xl text-white"
              >
                Demo
              </a>
            </p>
          </div>
          <div className="max-w-full mt-10 -mb-10 flex justify-evenly boder-solid border-white border-4 rounded-3xl">
            <StaticImage
              src="../../images/projects/4thIS_태블릿_목업_투명.png"
              width={600}
              height={600}
              className="-ml-20 mr-10 drop-shadow-shadowRD"
            />
            <div className="py-40 w-1/2">
              <h4 className="text-base font-semibold leading-7 text-gray-900">
                동아리 홍보 및 프론트엔드 역량 강화 목적으로 프로젝트 진행
              </h4>
              <h4 className="text-base font-semibold leading-7 mt-3 text-gray-900">
                2022.09 ~ 2022.10 (팀)
              </h4>
              <h4 className="text-base font-semibold leading-7 mt-3 text-gray-900">
                팀장, FE 40% 기여
              </h4>
              <div className="mt-3">
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-js px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
                  JavaScript
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
              <ul className="no text-base leading-8 text-gray-900 mt-3">
                <li className="no">
                  - 스케쥴 및 팀원 관리, 메인 페이지, 모바일 반응형 제작
                </li>
                <li className="no">
                  - Vanila JavaScript 사용하여 슬라이드, 카운트 다운, 마우스
                  포인터 구현
                </li>
                <li className="no">
                  - 협업 능력을 기르기 위해 git 컨벤션, CSS BEM 방식을 주도하여
                  진행
                </li>
                <li className="no">
                  - 2021년에 비해 동아리 지원율 <strong>2배</strong> 증가
                </li>
                <li className="no">- cafe24로 배포</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
