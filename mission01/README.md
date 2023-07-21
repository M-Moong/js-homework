# js-homework

- 폼의 아이디(input) / 비밀번호(input) / 로그인(버튼)을 가져오기 위한 변수 선언.

![image](https://github.com/M-Moong/js-homework/assets/109510367/e3a0a2b5-b7e6-4987-a7e6-2c77d483b3aa)

### 전체적인 이벤트 처리 단계
###### 각각의 input값에 정규표현식과 에러메세지를 처리해주기위한 이벤트 분리 / 버튼의 input값 비교와 페이지이동 이벤트



- 아이디 처리 이벤트

![image](https://github.com/M-Moong/js-homework/assets/109510367/3d7230f5-2511-46f6-a7fc-71bbf272fca0)

- 비밀번호 처리 이벤트

![image](https://github.com/M-Moong/js-homework/assets/109510367/93e41523-69d9-407f-be19-7775e2cfe663) 

- 로그인버튼 처리 이벤트

![image](https://github.com/M-Moong/js-homework/assets/109510367/3bdb4009-8bf9-4cb4-97bc-00a741631050)



### 정규식 함수
> 아이디는 이메일형식처럼 @ 가 필수로 들어가야하고 . 뒤에는 최소 2글자가 와야합니다.

![image](https://github.com/M-Moong/js-homework/assets/109510367/cceee1b7-6765-4439-ae10-b5d5c9d43115)

> 비밀번호는 6자리 이상으로 특수문자와 숫자가 필수로 들어가야합니다.

![image](https://github.com/M-Moong/js-homework/assets/109510367/5adff6c3-5abc-400a-975e-d7a24b8fae4f)



### 에러메세지 함수
> 아이디와 비밀번호는 3단계로 validation 처리하였습니다.
1. 정규식에 만족했을때,
2. input값이 빈 값일때,
3. 정규식을 만족하지 못했을때

![image](https://github.com/M-Moong/js-homework/assets/109510367/adef0214-0a17-4584-925a-032a5ee50dfc)



### input값 비교 함수
> 아이디와 비밀번호 조건을 같은 조건문으로 처리하여 순차적으로 진행되게 하였습니다.

![image](https://github.com/M-Moong/js-homework/assets/109510367/41ab715d-1df6-4da9-ad96-feffe9aa46ae)

### 페이지 이동 함수
> 아이디와 비밀번호의 값이 정상적으로 입력되면 페이지 이동 처리 할수 있습니다.

![image](https://github.com/M-Moong/js-homework/assets/109510367/115071cd-03be-467b-959f-3c1769d35df7)
