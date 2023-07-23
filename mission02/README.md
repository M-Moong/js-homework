# 엘레멘탈 이미지 슬라이더 과제
	1. 클릭 이벤트 활성화 ✅
	2. nav 클릭시 배경 색상 변경 ✅
	3. 이미지 변경 ✅
	4. 텍스트 변경 ✅
	5. 함수 분리 ✅

<br>

![엘레멘탈 이미지 슬라이더](./poster/client/assets/엘레멘탈%20이미지%20슬라이더.gif)


<br>

### 목차
- [1. 시작함수](#시작함수)
- [2. 메인함수](#메인함수)
- [3. 함수분리](#함수-분리)
- [4. 유틸함수](#유틸함수)
- [5. 과제에 대한 회고](#과제에-대한-회고)

<br>

### 시작함수

- 전역 변수를 최대한 사용하지 않기위함으로 시작함수를 선언하여 호출하는 방식으로 구현했습니다.

```javascript
function init() {	
	const nav = getNode('.nav');

	nav.addEventListener('click', handleSlider);
	
	// window.addEventListener('DOMContentLoaded', () => setAudio(0))
	// 크롬 브라우저 자체에서 페이지 로드시 (오디오 or 비디오) autoplay를 막고 있습니다.
	// 비디오는 mute상태로만 autoplay를 지원합니다.
}
init();
```
- - -

<br>

### 메인함수

- 시작함수 다음으로 실행되는 함수이며, 기본적인 변수들의 선언과 사용하는 함수들을 담고 있습니다.
	- 유틸함수는 _getNode_, _attr_, _removeClass_, _addClass_
	- 함수로는 **이미지 변경**, **이름 변경**, **배경 변경**, **오디오** 4가지가 있습니다.

```javascript
function handleSlider(e) {
	e.preventDefault();		// 브라우저의 기본동작을 막는다.

	const ul = getNode('.nav ul')
	const target = e.target.closest('li');
	const list = [ ...ul.children ];			
	
	if (!target) return;	// 부모요소중 li가 없는 요소들은 return 처리
	
	const index = attr(target, 'data-index') - 1;		// data-index에서 1을 뺀다.

	list.forEach((li) => removeClass(li, 'is-active'));  // 모든 'li'의 is-active를 다 삭제한다.

	addClass(target, 'is-active');		// 선택된 li에 is-active추가.

	setImage( index)		// 이미지 변경 함수
	setNameText( index );		// 이름 변경 함수
	setBgColor( index );		// 배경 변경 함수 
	setAudio(index);			// 오디오 함수
}
```

- - -

<br>

### 함수 분리

- 각각의 함수는 메인함수의 index를 파라미터값으로 사용하고 있습니다.
- data.js 의 data를 쓰는 함수들은 받아온 `index` 파라미터로 구조 분해 할당을 사용하여 구성하였습니다.

<br>

##### 이미지 변경 함수

- `visualImage` 의 `src`와 `alt`를 `attr`함수를 이용하여 dom트리에 뿌려지도록 구성했습니다.

```javascript
function setImage(index) {
	const visualImage = '.visual img';
	const {alt, name} = data[index];

	attr(visualImage, 'src', `./assets/${name}.jpeg`)
	attr(visualImage, 'alt', `${alt}`)
}
```

##### 이름 변경 함수

<br>

- `h1`태그를 변수로 지정하여 `textContent`를 이용하여 `name`으로 변경되도록 하였습니다.

```javascript
function setNameText(index) {
	const nickName = getNode('h1')
	const { name } = data[index]

	nickName.textContent = `${name}`;
}
```

<br>

##### 배경 변경 함수

- `css`함수를 이용하여 `body`의 `background`스타일을 변경하여 배경 이미지를 설정하였습니다.
- `gradient`를 주어 배경을 구성하였는데, `colorB`값이 없을시 기본값으로 `#000` 컬러가 적용되도록 하였습니다.

```javascript
function setBgColor( index ) {
	const body = getNode('body');
	const {color} = data[index];
	const [colorA, colorB] = color;

	if(!(colorB)) colorB = '#000'

	css(body, 'background', `linear-gradient(to bottom, ${colorA}, ${colorB})`);	
}
```

<br>

##### 오디오 함수

- `source`로 경로를 설정하여 각각 이벤트에 맞게 오디오 파일이 지정되게 해주었습니다.
- `playingAudio`로 상태변수를 지정해주어 재생되고 있는 상태변수가 존재한다면 `stop()`을 시키고 다음 오디오가 재생 될수있도록 구성하였습니다.
- 이 부분에서 상태변수를 사용하기 위해 전역변수를 지정한것이 가장 아쉬움으로 남습니다.

```javascript
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
```

- - -

<br>

### 유틸함수

- ##### attr 함수

```javascript
// 속성의 get과 set을 둘다 해주는 유틸함수
export function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
		setAttr(node, prop, value);
  }
}
```
<br>

- ##### getNode 함수

```javascript
// 한가지 node 요소를 부르는 함수
export function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다.');
  }

  return document.querySelector(node);
}
```
<br>

- ##### addClass, removeClass 함수

```javascript
// 클래스를 추가하는 함수 (add)
export function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두번째 인수는 문자 타입이어야 합니다.'
    );
  }

  node.classList.add(className);
}
```
```javascript
// 클래스를 제거하는 함수 (remove)
export function removeClass(node, className) {
	if (typeof node === 'string') node = getNode(node);

	if (!className) {
		node.className = '';
		return;
	} 

	if (typeof className !== 'string') {
		throw new TypeError('removeClass 함수의 두번째 인수는 문자 타입이어야 합니다.');
	}
	
	node.classList.remove(className);
}
```

<br>

- ##### css 함수

```javascript
function setCss(node, prop, value) {
	if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
		throw new SyntaxError(
			'setCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new SyntaxError('setCss 함수의 세번째 인수는 필수값 입니다.');

  node.style[prop] = value;
}

function getCss(node, prop) {
	
	if (typeof node === 'string') node = getNode(node);

	if (!(prop in document.body.style)) {
		throw new SyntaxError(
			'setCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

	return getComputedStyle(node).getPropertyValue(prop);
}

export const css = (node, prop, value) => {
	return !value ? getCss(node, prop) : setCss(node, prop, value);
};
```

- - -

<br>

### 과제에 대한 회고
> 우선 오디오 함수에서 상태변수를 사용하기 위해 전역을 오염시킨점이 가장 아쉬운 부분이였습니다. 클로저를 좀더 공부하여 자유자재로 사용하기위해 연구가 더 필요하다고 느꼈습니다. 
전체적으로는, dom트리의 노드에 접근하여 이벤트를 걸고 data를 원하는대로 뿌려줄수 있도록 하는 방법을 많이 배웠습니다.
리팩토링부분에 있어 좀더 깔끔하고, 간략하게 짤수 있도록 많은부분을 노력해야한다고 생각합니다.


