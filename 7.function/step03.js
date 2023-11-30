let result = 0;

function add(a, b) { // a, b를 선언(let a;)
    const c = 5;
    const d = 6;

    // const a = 2; // 코드가 처리됨

    console.log(a, b); // 2, 3 출력
    // 함수 내부에서 자신의 스코프에 위치한 변수를 참조할 수 있음

    // const result = '0아닌데?';
    console.log(result); // 0, 함수 내부에서 외부의 변수 참조 가능
}

add(2, 3);

console.log(c, d); // c is not defined, 외부에서 함수 내부의 변수 참조 불가능


