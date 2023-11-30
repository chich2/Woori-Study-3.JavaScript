/**
 * 현재 실행 중인 작업(Task)이 아직 종료되지 않은 상태라고 해도,
 * 다음 작업을 곧바로 수행할 수 있는 방식
 */

function first() {
    console.log('first() called');
}

function second() {
    console.log('second() called');
}

setTimeout(first, 3 * 1000);
second();