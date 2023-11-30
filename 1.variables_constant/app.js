console.log('hello');
// log

/**
 * 변수는 선언과 초기화라는 과정을 통해 작성할 수 있음
 * 
 * 변수의 선언
 * 변수 선언 시 사용하는 키워드(keyword) or 예약어
 * var(기억에서 잊기), let, const
 */

let userName = 'yoo'; // 선언과 초기화를 한 번에 수행
console.log(userName);

var a; // 변수를 선언
console.log(a);

a = 10; // 변수의 값을 초기화
console.log(a);

// d;
// console.log(d);

// let beatles = let it be;

// 모든 코드는 기본적으로 위에서 아래로 수행됨

console.log(z); // 변수 호이스팅(hoisting)
var z; // undefined(var 키워드는 사용하지 않는 것이 좋음)

// 값이 변할 수 있는 경우 let 키워드 사용(변수)
let comment = "let's go?";
comment = "no!";
// 변수는 값을 재할당할 수 있음

// 상수(Constant) - 값이 한 번 초기화된 후 재할당 할 수 없음, const 키워드 사용
const allUsers = 5;

allUsers = 10; // Uncaught TypeError: Assignment to constant variable. at app.js:39:10
// 상수는 재할당 할 수 없음

// 상수는 대문자로 사용하는 편
const PI = 3.14; // 대문자로 사용

// 기본적으로 const를 사용해서 방어적으로 작성 후 변경이 필요할 것 같은 값은 let으로 변경