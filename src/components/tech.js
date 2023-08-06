import * as React from "react";

const Tech = () => {
  return (
    <div id="skills">
      <div className="bg-primary-green_bg py-24 sm:py-52">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="my-2 text-base font-semibold leading-7 text-indigo-600">
              Skills
            </h2>
            <p className="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              기술 스택
            </p>
            <div className="flex justify-around my-10">
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/10">
                JavaScript
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/10">
                TypeScript
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/20">
                Vue
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/20">
                Vuex
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/10">
                Pinia
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/10">
                Vuetify
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/10">
                Express
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/10">
                Sequelize
              </span>
              <span class="inline-flex mr-10 items-center rounded-3xl bg-white px-5 py-2 text-base font-bold text-black ring-1 ring-inset ring-white/10">
                MySQL
              </span>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="48px"
                      height="48px"
                    >
                      <polygon
                        fill="#81c784"
                        points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
                      />
                      <polygon
                        fill="#455a64"
                        points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
                      />
                    </svg>
                  </div>
                  Vue
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <p>
                    Vue2 Option API, Vue3 Composition API의 사용 경험이
                    있습니다.
                  </p>
                  <p>Vuex, Pinia의 상태관리 라이브러리 사용 경험이 있습니다.</p>
                  <p>Vuetify3 UI 라이브러리 사용 경험이 있습니다.</p>
                  <p>
                    Axios를 사용하여 Open API 호출 및 데이터 바인딩 경험이
                    있습니다.
                  </p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-badge-js">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="144px"
                      height="144px"
                      baseProfile="basic"
                    >
                      <path fill="#f7df1e" d="M6,42V6h36v36H6z" />
                      <path
                        fill="#000001"
                        d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
                      />
                    </svg>
                  </div>
                  JavaScript
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <p>ES6+ 문법을 사용할 수 있습니다.</p>
                  <p>JavaScript 동작 방식을 이해하고 있습니다.</p>
                  <p>TypeScript를 사용할 수 있습니다.</p>
                  <p>TypeScript 개발 환경 구축 경험이 있습니다.</p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <svg
                      version="1.1"
                      baseProfile="basic"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M49.729,11h-0.85c-1.051,0-2.041,0.49-2.68,1.324l-8.7,11.377l-8.7-11.377C28.162,11.49,27.171,11,26.121,11h-0.85
	l10.971,14.346L25.036,40h0.85c1.051,0,2.041-0.49,2.679-1.324L37.5,26.992l8.935,11.684C47.073,39.51,48.063,40,49.114,40h0.85
	L38.758,25.346L49.729,11z"
                      />
                      <path
                        d="M21.289,34.242c-2.554,3.881-7.582,5.87-12.389,4.116C4.671,36.815,2,32.611,2,28.109L2,27h12v0h11l0-4.134
	c0-6.505-4.818-12.2-11.295-12.809C6.273,9.358,0,15.21,0,22.5l0,5.573c0,5.371,3.215,10.364,8.269,12.183
	c6.603,2.376,13.548-1.17,15.896-7.256c0,0,0,0,0,0h-0.638C22.616,33,21.789,33.481,21.289,34.242z M2,22.5C2,16.71,6.71,12,12.5,12
	S23,16.71,23,22.5V25H2V22.5z"
                      />
                    </svg>
                  </div>
                  Express.js
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <p>Web Application Server를 구축한 경험이 있습니다.</p>
                  <p>
                    Sequelize와 MySQL을 사용하여 CRUD 및 API 설계 경험이
                    있습니다.
                  </p>
                  <p>TypeScript로 개발 환경 구축 및 개발한 경험이 있습니다.</p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute -left-8 -top-5 flex h-20 w-20 items-center justify-center rounded-lg ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="96px"
                      height="96px"
                    >
                      <path
                        fill="#E65100"
                        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                      />
                      <polygon
                        fill="#FF6D00"
                        points="24,8 24,39.9 35.2,36.7 37.7,8 "
                      />
                      <path
                        fill="#FFFFFF"
                        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                      />
                      <path
                        fill="#EEEEEE"
                        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="96px"
                      height="96px"
                    >
                      <path
                        fill="#0277BD"
                        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                      />
                      <polygon
                        fill="#039BE5"
                        points="24,8 24,39.9 35.2,36.7 37.7,8 "
                      />
                      <polygon
                        fill="#FFFFFF"
                        points="33.1,13 24,13 24,17 28.9,17 28.6,21 24,21 24,25 28.4,25 28.1,29.5 24,30.9 24,35.1 31.9,32.5 32.6,21 32.6,21 "
                      />
                      <path
                        fill="#EEEEEE"
                        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                      />
                    </svg>
                  </div>
                  HTML5 / CSS3
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <p>웹 표준을 지키기 위해 노력합니다.</p>
                  <p>반응형 웹을 만들 수 있습니다.</p>
                  <p>BEM 방법론을 적용할 수 있습니다.</p>
                  <p>Tailwind css 라이브러리 사용 경험이 있습니다.</p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="96px"
                      height="96px"
                    >
                      <path
                        fill="#F4511E"
                        d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                      />
                    </svg>
                  </div>
                  Git
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <p>기본적인 Git 명렁어를 사용할 수 있습니다.</p>
                  <p>Git-flow 전략을 사용한 경험이 있습니다.</p>
                  <p>Git Convention을 지키려고 노력합니다.</p>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>WeChat</title>
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                    </svg>
                  </div>
                  Community
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <p></p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
