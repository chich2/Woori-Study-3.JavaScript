// first라는 이름의 함수 선언
function first() {
    second();
    console.log('first');
}

function second() {
    console.log('second');
    console.log(a);
}

first(); // 함수 호출