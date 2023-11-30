const button = document.getElementById('btn');
console.log(button);

// 버튼을 클릭했을 때 'button clicked!' 출력

// 1. button한테 이벤트를 걸어줘야됨
const clickHandler = () => console.log('button clicked!');

// button.addEventListener('click', clickHandler);

button.addEventListener('click', () => console.log('button clicked!'));

console.log(typeof button);
console.log(button instanceof EventTarget);