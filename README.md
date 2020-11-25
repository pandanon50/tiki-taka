## 음성인식 API를 이용한 TODO리스트

### 프로젝트 요약

- 음성인식 (Speech To Text API) 를 이용한 TODO 리스트
---

### 개발환경

- BE
    - 서버 : Express
    - DB : Mysql(Sequalize)
- FE
    - Next.js
    - React.js (redux , redux-saga)
    - UI FrameWork : Ant-Design
- 역할 :
Backend :  Mysql 과 sequalize로 js환경에서 DB 연결 및 Express 활용하여 RESTAPI 사용

    음성인식 : Speech-To-Text 로 string을 액션별로 나누어 dispatch

    Front : Next.js를 이용하고 redux, redux-saga 액션 설정 및 컴포넌트 구성

---

### pages

1. TODO 페이지
    - 음성인식을 통한 일정등록
    - 음성인식을 통한 일정삭제,완료

2.  MONTH 페이지

    - 캘린더 형식의 월별 일정 검색

3. GOAL 페이지

   - 목표 관리 기능