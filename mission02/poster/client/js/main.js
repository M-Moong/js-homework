
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { getNode, attr, css, removeClass, addClass } from '../lib/index.js';
import { AudioPlayer } from './audio.js';
import { data } from './data.js';


//# 배경 바꾸는 함수
function setBgColor( index ) {
	const body = getNode('body');
	const {color} = data[index];
	const [colorA, colorB] = color;

	if(!(colorB)) colorB = '#000'

	css(body, 'background', `linear-gradient(to bottom, ${colorA}, ${colorB})`);	
}

//# 이미지 바꾸는 함수
function setImage(index) {
	const visualImage = '.visual img';
	const {alt, name} = data[index];

	attr(visualImage, 'src', `./assets/${name}.jpeg`)
	attr(visualImage, 'alt', `${alt}`)
}

//# 이름 바꾸는 함수
function setNameText(index) {
	const nickName = getNode('h1')
	const { name } = data[index]

	nickName.textContent = `${name}`;
}

//# 오디오 함수
let playingAudio = null;
function setAudio(index) {
	const {name} = data[index];
	const source = `./assets/audio/${name.toLowerCase()}.m4a`;
	
	if (playingAudio) {
    if (playingAudio.isPlaying()) {
      playingAudio.stop();
    }
  }

	playingAudio = new AudioPlayer(source);
	playingAudio.play();
}

//@ 메인 함수
function handleSlider(e) {
	e.preventDefault();		// 브라우저의 기본동작을 막는다.

	const ul = getNode('.nav ul')
	const target = e.target.closest('li');
	const list = [ ...ul.children ];			
	
	if (!target) return;	// li가 없는 요소들은 return
	
	const index = attr(target, 'data-index') - 1;		// data-index에서 1을 뺀다.

	list.forEach((li) => removeClass(li, 'is-active'));  // 모든 'li'의 is-active를 다 삭제한다.

	addClass(target, 'is-active');		// 선택된 li에 is-active추가.

	setImage( index)		//& 이미지 변경 함수

	setNameText( index );		//& 이름 변경 함수

	setBgColor( index );		//& 배경 변경 함수 
	 
	setAudio(index);			//& 오디오 함수

}

function start() {	
	const nav = getNode('.nav')

	nav.addEventListener('click', handleSlider);
	
	// window.addEventListener('DOMContentLoaded', () => setAudio(0))
	// 크롬 브라우저 자체에서 페이지 로드시 (오디오 or 비디오) autoplay를 막고 있습니다.
	// 비디오는 mute상태로만 autoplay를 지원합니다.
}
start();







