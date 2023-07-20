
/* class
-------------------------------------------------------------------------- */

// add
// remove
// toggle
// contains


//& 클래스를 추가하는 함수 (classList)
//% add
function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두번째 인수는 문자 타입이어야 합니다.'
    );
  }

  node.classList.add(className);
}

//% remove
function removeClass(node, className) {
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

//% toggle
const toggleClass = (node, className) => {
	 if (typeof node === 'string') node = getNode(node);

   if (typeof className !== 'string') {
     throw new TypeError('toggleClass 함수의 두번째 인수는 문자 타입이어야 합니다.');
	 }
	
	return node.classList.toggle(className);
}

/* css 
-------------------------------------------------------------------------- */


//& css set해주는 함수 
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


const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
};


