/**
 * JSON : JavaScript Object Notation
 * 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷
 * JS에 종속되지 않는 언어 독립형 데이터 포맷
 * 대부분의 프로그래밍 언어에서 사용 가능
 * 
 *  JSON 작성 방식은 JS의 객체 생성 방식과 유사
 * JSON  작성 방식
 * : key값 및 문자열은 ""(쌍따옴표만 가능)로 작성해야됨
 */

// JS 객체
const book = {
    title: '노인과 바다',
    author: '헤밍웨이',
    isSold: false,
    genere: ['소설', '에세이'],
};

// JSON.stringfy(변환할 객체);
console.log(book);
const jsonData = JSON.stringify(book);
console.log(jsonData);

// 서버로부터 응답 값을 받았을 경우
// -> 역직렬화(Deserialization)
// JS에서 사용할 수 있도록 JS 객체 타입으로 변환
const parsedData = JSON.parse(jsonData);
console.log(parsedData);


// 배열
const books = [
    { id: 1, title: "하농", author: "하농", isSold: false },
    { id: 2, title: "체르니", author: "체르니", isSold: true },
    { id: 3, title: "부르크뮐러", author: "부르크뮐러", isSold: true },
]

// 직렬화, 역직렬화 