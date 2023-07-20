


//& 속성을 get 해주는 유틸함수
function getAttr(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

//& 속성을 set 해주는 유틸함수
function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new Error('setAttr 함수의 두번째 인수는 문자 타입이어야 합니다.');
  }

  if (!node[prop] && prop !== 'class') {
    // 존재하지 않는 속성이면 dataset에 넣어서 내보낸다.
    node.dataset[prop] = value; // class인 상황만 제외시킨다.
    return;
  }

  node.setAttribute(prop, value);
}

//& 속성의 get과 set을 둘다 해주는 유틸함수
function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
		setAttr(node, prop, value);
  }
}

const arrowAttr = (node, prop, value) =>
	!value ? getAttr(node, prop) : setAttr(node, prop, value);
