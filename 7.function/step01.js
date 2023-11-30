// 기본적인 함수 정의, '함수 선언문' 방식

/**
 * JS Doc
 * 두 수를 받아서 덧셈 결과를 반환
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 덧셈 결과를 반환합니다.
 * @author 'yoo' // github nickname
 */
function add(a, b) {
    return a + b;
}

add(3, 5); // 함수 호출

// 뺄셈 기능 

// 두 번째 함수 생성 방식 - '함수 표현식' 방식
// JS에서 함수는 일급 객체(First Citizen)으로 취급되기 때문
const mtp = function(a, b) {
    return a * b;
}

// 함수를 mtp라는 변수에 담았기 때문에 mtp라는 이름으로 표현 가능
console.log(mtp(3, 5));

// ES(ECMAScript)6(2015년)에서 등장한 문법, 화살표 함수
const sub = (a, b) => { return a - b; }
console.log(sub);

console.log(sub(5, 3));

// 만약 구현부의 로직이 1줄일 경우 { }, return 키워드 생략 가능
const sub2 = (a, b) => a - b;
console.log(sub2(5,2));

// 파라미터가 없으면? () 작성 필수
const hello = () => console.log('hello!');
hello();

// 파라미터가 1개면?
const square = (x) => x * x;
const square2 = x => x * x;