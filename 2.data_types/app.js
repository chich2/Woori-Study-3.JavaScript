const a = 5;
console.log(typeof a);

// 값(value), 식(expression), 문장(statement)
// 값 - 5, 'yoo'
// 식 - 1 + 1
// 문장 - const a = 5;

const b = '5';
console.log(typeof b);

const userName = '유';
console.log('안녕하세요 저는 ' + userName + '입니다.' );
console.log('안녕하세요 저는 ', userName, '입니다.');

// backtick 기호, 템플릿 리터럴 문법(값, 식 작성 가능)
console.log(`안녕하세요 저는 ${userName} 입니다.`);

// console.log(`안녕하세요 저는 ${const a = 5;} 입니다.`); // 문장은 사용 불가

let c = 5;
console.log(typeof c); // type 확인 연산자 - typeof

c = 'yoo'; // ?
console.log(typeof c);
// JS는 실행 과정에서 타입이 변할 수 있는 동적(Dynamic) 타입 언어