# 오르미 4기 Front-End 개인 프로젝트

## 📋 프로젝트 개요

Figma 디자인 파일을 받아 디자인대로 사이트를 구현하고 필요한 기능을 추가해보자

## 🚩 프로젝트 목표
- 받은 디자인 파일과 최대한 유사하게 만든다.
- 코드를 모르는 사람이 봐도 이 코드가 무슨 기능을 하는지 알 수 있도록 코딩한다.
- 코드를 최대한 조각화하여 문제가 생겼을 때 바로 찾을 수 있도록 한다.
- css는 영역 별로, js는 기능 별로 나누어 관리한다.

## 🗓 프로젝트 진행기간
- 2024-01-16 ~ 2024-01-23

## 🔗 배포 주소
https://fernandokkang.github.io/Ormi-4th-front-end-project/

## ⚙ 사용 기술

### ⌨ Languages
![Html](https://img.shields.io/badge/Html5-E34F26?style=plastic&logo=Html5&logoColor=white)
![Css](https://img.shields.io/badge/Css3-1572B6?style=plastic&logo=Css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=Javascript&logoColor=white)

### ⚒ Tools
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=plastic&logo=IntelliJ%20IDEA&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=plastic&logo=GitHub&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-D97652?style=plastic&logo=Figma&logoColor=white)

### 🔧 API
- kakao map api
- picsum api

## 📋 기능 구현 목록

### Layout
- nav bar
- [x] navbar 크기 `W:1920 H:102`
- [x] 로고 이미지 `W:130 H:40`
- [x] Home, About, Support 버튼 `font 16px Pretendard` `color #000000`
- [x] Download 버튼 `font 16px bold Pretendard` `color #FFFFFF`
      `background #D97652` `W:140 H:50 Rad:40`
- [x] `background #F2E9D8`


- header
- [x] 글자 좌측 정렬
- [x] h2 `font 48px bold Pretendard` `color #000000`
- [x] span `font 16px Pretendard` `color #000000`
- [x] Download 버튼 `font 16px bold Pretendard` `color #FFFFFF` 
      `background #D97652` `W:140 H:50 Rad:40`
- [x] `background #F2E9D8`
- [x] 사진 크기 `W:415 H:766`


- main
- [x] 사진 크기 `W:660 H:390 Rad:30`
- [x] 글자 좌측 정렬
- [x] h3 `font 36px bold Pretendard` `color #000000`
- [x] span `font 16px Pretendard` `color #000000`


- content
- [x] 글자 가운데 정렬
- [x] 격자 형식으로 사진 배치
- [x] 사진 크기 `W:378 H:378 Rad:30`
- [x] 사진 간 거리 `72px`
- [x] h2 `font 48px bold Pretendard` `color #D97652`
- [x] p `font 24px bold Prentendard` `color #000000`
- [x] span `font 16px Pretendard` `color #000000`
- [x] span > strong `color #D97652`
- [x] Show more 버튼 `font 16px bold Pretendard` `color #FFFFFF`
      `background #D97652` `W:143 H:50 Rad:40`


- map area
- [x] h3 `font 36px bold Pretendard` `color #000000`
- [x] span `font 16px medium Pretendard` `color #000000`
- [x] 지도 크기 `W:1278 H:570`


- subscribe area
- [x] area `W:1280 H:200 Rad:30`
- [x] `background #263140`
- [x] h3 `font 36px bold Pretendard` `color #FFFFFF`
- [x] span `font 14px Pretendard` `color #FFFFFF`
- [x] input div `W:530 H:60 Rad:60`
- [x] input div > span `font 16px Pretendard` `color #767676`
- [x] input div > img `W:24 H:24`
- [x] Subscribe button `W:135 H:50 Rad:40`
- [x] Subscribe button `font 16px Bold Pretendard` `color #FFFFFF`
- [x] Subscribe button `background color #D97652`


- modal
- [x] area `W:600 H:400 Rad:30`
- [x] background img
- [x] h3 `font 36px bold Pretendard` `color #D97652`
- [x] span `font 14px Pretendard` `color #000000`
- [x] button `W:183 H:50 Rad:40`
- [x] button `background #D97652`
- [x] button `font 16px Bold Pretendard` `color #FFFFFF`


- footer
- [x] 로고 이미지 `W:226 H:70`
- [x] 아이콘 `W:42 H:42`
- [x] 아이콘 그룹 `gap : 20`
- [x] `background #FFFFFF`

### 기능
- [x] 상단,하단 로고 이미지 클릭하면 index.html 페이지로 이동
- [x] navbar Home 버튼 클릭하면 index.html 페이지로 이동
- [x] download 버튼 클릭하면 메인에 있는 고양이 이미지가 다운로드
- [x] 다음 지도 api
- [x] 지도가 현재 보여주고 있는 곳의 도로명 주소 출력하고 마커 찍어주기
- [x] 지도를 클릭하면 마커를 이동시키고 출력하는 주소도 변경하기
- [x] picsum api를 활용하여 사진을 로딩하고 무한 스크롤 생성하기
- [x] show more 버튼을 클릭하면 무한 스크롤 on
- [x] 무한 스크롤 활성화시 버튼의 이름을 stop으로 변경하고 무한 스크롤 off
- [x] 버튼 누르면 모달 창 열기
- [x] 버튼 누르면 모달 창 닫기
- [x] 하단 아이콘 클릭하면 해당 심볼이 가르키는 사이트로 이동
- [x] hover 버튼으로 페이지 최상단으로 이동하기

## 프로젝트 회고
프로젝트 목표는 모두 달성한 것 같다. 그럼에도 아쉬운 점이 있다면 클래스 네임 네이밍이다. <br>
클래스 네임에 html 태그명을 넣어버리니 프로젝트 진행 중 html 태그가 변경되는 경우에 클래스 네임까지 변경해야하는 상황이 생긴다.<br>
그렇기에 앞으로는 클래스 네이밍이든 이미지 네이밍이든 태그명을 안쓰고 네이밍하도록 하겠다.
