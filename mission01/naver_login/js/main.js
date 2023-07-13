
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

/* -------------------------------------------------------------------------- */

const submit = document.querySelector(".btn-login");           // 로그인 button                    
const email = document.querySelector('#userEmail');            // 이메일 input
const pwd = document.querySelector('#userPassword');           // 비밀번호 input          

/* -------------------------------------------------------------------------- */

//# 아이디(이메일) vaildation
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase())
}

//# 비밀번호 vaildation
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* -------------------------------------------------------------------------- */


//! 에러 함수를 따로 만들었지만,
//! addEvenetlistener 안에서 호출 되어 실행되지 않음.
// function Error(tag, real, value) {
//   if (real) {
//     tag.classList.remove("is--invalid");
//   } else if (value === "") {
//     tag.classList.remove("is--invalid");
//   } else {
//     tag.classList.add("is--invalid");
//   }
// }
// Error(email, realValue, value);



//# 아이디 처리 이벤트
email.addEventListener('input', () => {
  let value = email.value;

  //@ 정규표현식 적용
  let realValue = emailReg(value);

  //& 에러 메시지 처리
  if (realValue) {
    email.classList.remove("is--invalid");
  } else if(value === '') {
    email.classList.remove("is--invalid");
  } else {
    email.classList.add("is--invalid");
  }
});


//# 비밀번호 처리 이벤트
pwd.addEventListener("input", () => {
  let value = pwd.value;

  if (value == '') {
    pwd.classList.remove("is--invalid");
  }

  //@ 정규표현식 적용
  let realValue = pwReg(value);

  //& 에러 메시지 처리
  if (realValue) {
    pwd.classList.remove("is--invalid");
  } else if (value === '') {
    pwd.classList.remove("is--invalid");
  } else {
    pwd.classList.add("is--invalid");
  }
});


//# 로그인버튼 처리 이벤트
submit.addEventListener('click', (event) => {

  event.preventDefault();

  // 이메일값이 맞는지,
  if (email.value !== user.id) {
    alert('이메일이 올바르지 않습니다.')
    // 비밀번호값이 맞는지,
  } else if (pwd.value !== user.pw) {
    alert("비밀번호가 올바르지 않습니다.");
    // 맞다면 welcome 페이지로
  } else {
    window.location.href = 'welcome.html'
  }
})
