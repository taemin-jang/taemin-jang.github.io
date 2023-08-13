import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project1 = () => {
  return (
    <div className="relative">
      <div className=" before:bg-primary-project3 py-24 sm:py-40 before:content-[''] before:opacity-70 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="no mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Interview System
              <a
                href="https://github.com/taemin-jang/interview-system"
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
          <div className="relative max-w-full mt-10 -mb-10 flex justify-evenly boder-solid border-white border-4 rounded-3xl">
            <div className="group">
              <StaticImage
                src="../../images/projects/interviewsystem_태블릿_목업_투명.png"
                width={600}
                height={600}
                className="transition duration-700 ease-in-out -ml-20 mr-10 drop-shadow-shadowRD group-hover:-translate-x-10 group-hover:-translate-y-10"
              />
              <StaticImage
                src="../../images/projects/interviewsystem_태블릿_목업2.png"
                width={600}
                height={600}
                className="!absolute transition duration-700 ease-in-out drop-shadow-shadowRD group-hover:-z-10 group-hover:translate-x-10 group-hover:translate-y-10 -left-8 bottom-8"
              />
            </div>
            <div className="pt-20 w-1/2">
              <h4 className="text-base font-semibold leading-7 text-gray-900">
                이력서 작성, 지원, 면접을 한 곳에서 관리
              </h4>
              <h4 className="text-base font-semibold leading-7 mt-3 text-gray-900">
                2022.10 ~ 2022.12 (팀)
              </h4>
              <h4 className="text-base font-semibold leading-7 mt-3 text-gray-900">
                팀장, FE 60% BE 40% 기여
              </h4>
              <div className="mt-3">
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-vue px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Vue
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-js px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-white/20">
                  JavaScript
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-express px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Express
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-ts px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  TypeScript
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-webrtc px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  WebRTC
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-socket px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Socket.io
                </span>
                <span className="inline-flex mr-3 px-3 items-center rounded-md bg-badge-git px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  Git
                </span>
              </div>
              <div className="text-base leading-7 text-gray-900 mt-3">
                <p className="no">
                  - 교내 추천 채용 게시판이 잘 활용되지 않아 개선하기 위해
                  프로젝트를 진행.
                </p>
                <p className="no">
                  - 협업 능력을 기르기 위해 git 컨벤션, git flow 전략, css BEM
                  방식, 코드 리뷰를 주도하여 진행.
                </p>
                <p className="no">
                  - Vue-router의 네비게이션 가드를 통해 면접자와 면접관을
                  분리하여 직접 접근 제어.
                </p>
                <p className="no">
                  - Vuex 상태관리 라이브러리를 도입해 props 복잡도 개선.
                </p>
                <p className="no">
                  - FE 개발 중 BE 데이터가 필요할 경우 Postman dummy API를
                  만들어 개발 속도를 향상.
                </p>
                <p className="no">
                  - dummy API인 Resume, Apply, Score API를 Express, Sequelize
                  공식 문서를 통해 직접 개발하여 BE 개발 기한을 맞출 수 있도록
                  기여.
                </p>
                <p className="no">
                  - AWS EC2로 배포했으며 WebRTC를 이용한 화상 면접 기능을 다른
                  NAT 상에서도 동작시키기 위해 HTTPS 연동 및 로드밸런서 설정,
                  coturn을 이용해 TURN 서버 구축.
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
