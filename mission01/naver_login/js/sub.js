const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

/* -------------------------------------------------------------------------- */

const submit = document.querySelector(".btn-login"); // 로그인 button
const email = document.querySelector("#userEmail"); // 이메일 input
const pw = document.querySelector("#userPassword"); // 비밀번호 input

/* -------------------------------------------------------------------------- */

//@ 아이디(이메일) validation
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

//@ 비밀번호 validation
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* -------------------------------------------------------------------------- */

//& 아이디(이메일) 에러메세지 처리
function emailError(tag, value) {
  if (emailReg(email.value)) {				// 정규식조건에 만족했을때
    tag.classList.remove("is--invalid");
  } else if (email.value === "") {		// input값이 빈공간일때
    tag.classList.remove("is--invalid");
  } else {														// 정규식조건을 만족하지 못했을때 
    tag.classList.add("is--invalid");
  }
}


//&	비밀번호 에러메세지 처리
function pwError(tag, value) {
  if (pwReg(pw.value)) {    					// 정규식조건에 만족했을때
    tag.classList.remove("is--invalid");
  } else if (pw.value === "") {				// input값이 빈공간일때
    tag.classList.remove("is--invalid");
  } else {    									  		// 정규식조건을 만족하지 못했을때
    tag.classList.add("is--invalid");
  }
}


//* input값 비교 
function comparison(email, pw) {
  if (email.value !== user.id) {  		// 아이디입력값 비교
    alert("이메일이 올바르지 않습니다.");
  } else if (pw.value !== user.pw) { 	// 비밀번호값 비교
    alert("비밀번호가 올바르지 않습니다.");
  }
}


//^ 페이지 이동 
function move() {
	if (email.value === user.id && pw.value === user.pw) {
		window.location.href = "welcome.html"; 
  }
}


/* -------------------------------------------------------------------------- */


//# 아이디 처리 이벤트
email.addEventListener("input", () => {
  //@ 정규표현식
  let processedValue = emailReg(email.value);

  //& 에러 메시지
	emailError(email, processedValue);
});


//# 비밀번호 처리 이벤트
pw.addEventListener("input", () => {
  //@ 정규표현식
  let processedValue = pwReg(pw.value);

  //& 에러 메시지
  pwError(pw, processedValue);
});


//# 로그인버튼 처리 이벤트
submit.addEventListener("click", (event) => {
  event.preventDefault();

  //* input값 비교
  comparison(email, pw);

	//^ 페이지 이동
  move();
});


/* -------------------------------------------------------------------------- */
