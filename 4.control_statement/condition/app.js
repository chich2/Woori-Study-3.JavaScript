const a = 5;

if (a === 5) { // (a===5 => 조건식)
    console.log('a는 5입니다.');
} else if (a === 6) {
    console.log('a는 6입니다.');
} else {
    console.log('5가 아닙니다');
}

// document -> HTML 문서
// Element -> HTML Tag

// 1. 선택박스(Select box)와 '결과' 부분에 해당하는 HTML Tag들을 JS 코드로 가져왔음
const selectButton = document.getElementById('cookie'); // HTML 문서야 HTML 태그좀 가져와 id 값으로
const result = document.getElementById('result');

// 3. 셀렉트 박스가 값이 바뀐 것을 알려주면 그때 처리할 로직(동작)
function setResult() {
    const choice = selectButton.value; // 선택 박스에서 사용자가 선택한 값

    // 조건문을 사용해서 쿠키를 하나만 먹었을 경우 응답 결과 메시지
    if (choice === 'one') {
        result.textContent = '한대';
    } else if (choice === 'two') {
        result.textContent = '두대';
    } else {
        result.textContent = '보류';
    }
}

// 2. 셀렉트 박스에게 '너가 가지고 있는 선택지 중에 하나가 선택되면, 나한테 말좀해줘'
selectButton.addEventListener('change', setResult);