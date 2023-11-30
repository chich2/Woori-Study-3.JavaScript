function order(food, callback) {
    console.log(`${food} 도착`); // 언어 감지 요청 응답되었을 때
    callback(); // 번역 요청 수행
}

function eat() {
    console.log('먹는다');
}
  
order('짜장면', eat);