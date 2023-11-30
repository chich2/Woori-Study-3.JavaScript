// function a() {
//     setTimeout(() => console.log('a() called'), 1000);
// }

// a();
// console.log('a is done');

// 실행 결과와는 반대로 동작하도록 하려면?
function a(callback) {
    setTimeout(() => {
        console.log('a called()');
        callback();
    }, 1000);
}

a(() => console.log('a is done'));