// DOM 객체
console.log(document); // directory

console.log(window.document === document);

// DOM을 통한 HTML 조작
// const h1 = document.querySelector('h1');
const h1 = document.getElementById('main-title');
console.log(h1);
console.log(h1.innerText);

// li 태그를 전부 가져오기
const liList = document.querySelectorAll('li');
console.log(liList[1]);

// getElement's' -> 요소가 1개여도 배열로 가져옴
const liList2 = document.getElementsByClassName('list-item');
console.log(liList2);

