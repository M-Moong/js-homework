
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nav = getNode('.nav')
const ul = getNode('.nav ul')
const visualImage = getNode('.visual img')
const nickName = getNode('h1')



function setBgColor() {

}

function setImage() {

}

function setNameText() {
	
}



function handleSlider(e) {
	e.preventDefault();

	const target = e.target.closest('li');
	const list = [...ul.children];

	if (!target) return;

	const index = attr(target, 'data-index');


	list.forEach((li) => removeClass(li, 'is-active'));

	addClass(target, 'is-active');

	attr(visualImage, "src", `./assets/${data[index-1].name}.jpeg`);
	attr(visualImage, "alt", `${data[index - 1].alt}`);
	
	nickName.textContent = `${data[index - 1].name}`;

	css(document.body, 'background', `linear-gradient(to bottom, 
		${data[index - 1].color[0]},${data[index - 1].color[1]})`);

}

nav.addEventListener('click', handleSlider);










