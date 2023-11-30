// {}, [], () -> 리터럴

// 배열 리터럴 방식으로 배열 객체 생성
const array = ['orange', 'cookie', 'orange-cookie'];

console.table(array);
console.log(typeof array); // object 타입(?)

// JS Core에서 제공하는 내장 객체인 Array를 활용하여
// isArray() 메서드(함수) 사용
// isArray - 인수로 전달한 값이 배열 타입인지 확인하는 메서드
console.log(Array.isArray(array));

console.log(array.length);

const array2 = ['orange', 'cookie', 'orange-cookie'];

// MDN - Array pop
array2.push('쿠키'); // pop(), shift(), unshift(), splice()
console.log(array2);