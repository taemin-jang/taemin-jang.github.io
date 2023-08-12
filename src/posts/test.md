---
title: Hello, world! tony
slug: hello-world
date: 2019-01-29
profile: "../images/JangTaemin2.png"
image: "../images/preflight.png"
web_before_ajax: "../images/web_before_ajax.png"
web_after_ajax: "../images/web_after_ajax.png"
---

# AJAX란?

AJAX (Asynchronous JavaScript And Xml)는 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹 페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다.

## AJAX 이전 전통적인 웹페이지 방식

![Untitled]{web_before_ajax}

1. 클라이언트로부터 요청이 들어왔을 때 이전 웹 페이지와 차이가 없어 변경할 필요가 없는 부분도 포함해서 새로운 HTML을 서버로부터 다시 전송받는다.
2. 전송 받은 데이터를 처음부터 다시 렌더링한다. 이 때 화면 깜박임이 발생한다.
3. 클라이언트와 서버와 통신이 동기 방식으로 동작하여 서버로부터 응답이 될 때까지 블로킹된다.

## AJAX 적용 후 웹페이지 방식

![Untitled]({web_after_ajax})

1. 변경할 부분을 갱신하는 데 필요한 데이터만 받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
2. 변경할 필요가 없는 부분은 다시 렌더링하지 않는다. 화면 깜박임 현상이 발생하지 않는다.
3. 클라이언트와 서버의 통신이 비동기 방식으로 동작하므로 블로킹이 발생하지 않는다.

### XMLHTTPRequest (XHR)

AJAX는 XMLHTTPRequest를 기반으로 동작하며, HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공한다.

ES6 이전 방식

```jsx
// 객체 생성
var ourRequest = new XMLHttpRequest();

// HTTP 요청 정보 초기화
ourRequest.open(
  "GET",
  "https://taemin-jang.github.io/json-example/animals-1.json"
);

// HTTP 요청이 성공적일 경우
ourRequest.onload = () => {
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData[0]);
};
ourRequest.send();
```

### Fetch API

XMLHTTPRequest 보다 훨씬 코드가 직관적이다. Promise를 리턴한다.

ES6 이후 방식

```jsx
fetch("https://taemin-jang.github.io/json-example/animals-1.json")
	.then(res => res.json())
	.then(resJson => console.log(resJson));
	.catch((error) => {
        console.log(error);
   });
```

## 정리

### 장점

- 페이지를 전환하지 않고 빠르게 화면 일부분 업데이트 할 수 있다.
- 수신하는 데이터 양을 줄일 수 있고 클라이언트에게 처리를 맡길 수 있다.
- 서버 처리를 기다리지 않고 비동기 요청이 가능하다.

### 단점

- 지원하지 않는 브라우저가 있다.
- 무분별하게 사용하면 역으로 서버의 부하가 늘어날 수 있다.
- 동일 출처 정책 문제가 발생할 수 있다.

# CORS, CSRF 그게 대체 모야?

CORS를 알기 전에 SOP 먼저 알고 가야한다.

## SOP (Same-Origin Policy)

직역하면 동일 출처 정책이라고 한다. 말 그대로 같은 출처끼리 정보(리소스)를 공유할 수 있다.

> 출처란 ?
>
> ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d963df6a-b159-4cfa-8fe3-dda44ac794f2/Untitled.png)
>
> Protocol + Host + Port를 출처라고 한다.
>
> 이 중에서 하나라도 다르면 서로 다른 출처라고 브라우저에서 판단한다.

| URL ( http://domain.com ) | Result                     |
| ------------------------- | -------------------------- |
| http://domain.com:8080    | x (port가 다르기 때문)     |
| http://api.domain.com     | x (host가 다르기 때문)     |
| https://domain.com        | x (protocol이 다르기 때문) |

이러한 정책은 보안 이슈로 인해 나오게 됐다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d317b8b8-21f6-4296-81cd-e503776b9f0c/Untitled.png)

만약 어떤 사이트를 방문했는데 해당 사이트가 누군가 악의적으로 만든 사이트라고 가정하자.

해당 사이트에서 다른 금융 사이트를 로그인하도록 유도를 해서 로그인을 하면 악성 사이트에서 JS로 쉽게 접근하여 악의적으로 사용할 수 있다.

이렇게 사용자의 인증된 세션을 악용해서 공격하는 방식을 CSRF (Cross Site Request Forgery, 사이트 간 위조 요청)라고 한다.

CSRF를 방지하기 위해서 SOP 정책이 나오게 된 것이다. SOP를 적용하게 되면 악성 사이트의 Origin(출처)는 다른 출처이기 때문에 허용이 안된다.

만약 다른 출처의 리소스를 접근하기 위해서 CORS 정책이 필요하다.

## CORS (Cross-Origin Resource Sharing)

교차 출처 리소스 공유라고 직역이 되고, 교차 출처는 다른 출처를 의미한다.

HTTP header를 추가하여 서로 다른 출처의 리소스를 접근할 수 있는 권한을 부여하도록 브라우저에게 알리는 정책이다.

보안 상의 이유로 SOP에 의해 다른 출처의 HTTP 요청을 제한하지만, CORS 정책에 맞게 올바른 HTTP header를 포함한 응답을 반환하면 브라우저는 해당 출처에 대한 접근을 허용했다고 판단한다.

## CORS 동작 방식

CORS 동작 방식에는 3가지 시나리오가 있다.

- Simple Request
- Preflight Request
- Request with Credentials

### Simple Request

다음 모든 조건을 충족한다면 Preflight Request를 하지 않고 바로 요청을 보내는 것이다.

- HTTP Method : GET, HEAD, POST
- Header : Accept, Accept-Language, Content-Language, Content-Type
- Content-Type : application/x-www-form-urlencoded, multipart/form-data, text/plain

CORS를 허용하려면 서버 측에서 Access-Control-Allow-Origin = ‘\*’ 으로 해주면 모든 도메인을 허용해준다. ⇒ CORS 정책 위반 여부

### Preflight Request

Simple Request와는 다르게 먼저 Option 메서드를 통해 다른 출처의 리소스로 HTTP 요청을 보낸 후 실제로 HTTP 요청을 전송하기 안전한지 확인한다. (사전 작업)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/07997248-ca8b-4b7f-9fd5-0c0e106f09f4/Untitled.png)

- Preflight Request : 헤더에 실제 요청 시 어떤 헤더와 HTTP Method를 사용할 지 전달
  - Access-Control-Request-Method : 실제 요청 시 전송 할 HTTP Method
  - Access-Control-Request-Headers : 실제 요청 시 전송 할 정의된 헤더
- Preflight Response : 사용 가능한 HTTP Method와 Header 목록을 전달
  - Access-Control-Allow-Origin : 리소스를 가져올 수 있는 출처, ( \*로 할 경우 모든 출처를 허용)
  - Access-Control-Allow-Methods : 리소스에 접근 시 허용되는 HTTP Method 목록
  - Access-Control-Allow-Headers : 리소스에 접근 시 허용되는 정의된 헤더 목록
  - Access-Control-Allow-Max-Age : Preflight Request에 대한 결과를 캐싱할 수 있는 시간
    - 해당 시간 이내에 동일한 요청을 재시도 할 경우 Preflight Request를 생략하고 캐싱된 결과를 반환

이러한 Preflight Request 진행 후 CORS 정책에 위반되지 않으면 실제 요청을 통해 리소스에 접근하게 된다.

### 왜 Preflight Request를 하는걸까?

서버는 CORS를 모른다!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca539ad2-97a5-45a6-b3f9-c44667cd35ad/Untitled.png)

만약 Preflight를 안하게 됐을 때 Delete나 Put 같은 HTTP Method로 요청을 한다고 해보자.

그러면 서버는 해당 요청대로 서버 로직을 처리한다. 이 때 데이터가 삭제될 수도 있고, 변경될 수도 있다. 그러고 서버에 CORS 설정을 안해줬으므로 허용된 출처는 없고 브라우저는 CORS 에러를 발생시킨다.

하지만 이미 서버에서는 요청에 맞게 데이터를 처리한 이후다.

그렇기 때문에 Preflight가 필요하게 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/61c56028-37bb-4a05-b7cb-cce05015e499/Untitled.png)

위 그림과 같이 Preflight를 통해서 요청된 origin(출처)가 올바른지 확인 후 올바르지 않다면(=CORS) 서버에서는 어떠한 처리도 하지 않기 때문에 실제 요청을 보내지 않는다.

### Request with Credentials

인증(쿠키) 관련 헤더를 포함할 때 사용하는 요청이다.

- 클라이언트측 요청 헤더에 credentials 옵션을 별도로 설정해줘야 한다.
  - same-origin : 동일 출처 내에서만 인증 정보를 담는다. (기본값)
  - include : 모든 요청에 대해서 인증 정보를 담는다.
  - omit : 모든 요청에 대해서 인증 정보를 담을 수 없도록 설정한다.
- 서버측 응답 헤더에 Access-Control-Allow-Credentials 값이 반드시 true로 설정되어야 한다.
  - 클라이언트측 요청 헤더에 credentials 옵션을 설정해줘도 서버측 응답 헤더에 설정해주지 않으면 인증 정보를 담지 못한다.
  - 또한 인증 정보를 허용한다면, Access-Control-Allow-Origin 헤더에 와일드카드 (\*)는 넣을 수 없고, 반드시 출처를 지정해줘야한다.
