// 콜백 함수 - 기본

// Hello yoo 를 출력하는 함수 greeting
// function greeting(name) {
//     console.log(`Hello ${name}`);
// }
// greeting을 화살표 함수로 변경
const greeting = (name) => console.log(`Hello ${name}`);

// greeting('yoo');

function processUserInput(name, callbackFunction) {
    callbackFunction(name); // greeting(name);과 같음
}

processUserInput('yoo', greeting);

// 함수 2개 구현

// 1. 쿠팡에서 사과를 기다리는 함수 waitCoupang(appleBox, callback)
// 함수의 동작: '쿠팡에서 ${appleBox}가 도착했다'를 출력하는 함수

// 2. bringItToNeighbor(별도의 파라미터 없음) 
// 함수의 동작: '옆집 아주머니에게 전달 완료'를 출력하는 함수

const waitCoupang = (appleBox, callback) => {
    console.log(`쿠팡에서 ${appleBox}가 도착했다`);
    // 서버에 사용자 정보를 요청하는 코드() // userName을 반환
    callback();
}
const bringItToNeighbor = () =>{
    console.log();
}

waitCoupang('appleBox', bringItToNeighbor);

const numbers = [1,2,3,4];

const callBack = number => console.log(number);
// numbers.forEach(callBack);
// numbers.forEach(number => console.log(number));