/**
 * JS에서 원시 값(Primitive value) or 기본 타입을 제외한 모든 것은 객체
 * 
 * 기본적인 차이는 원시 값은 하나의 값만을 나타냄
 * 객체는 다양한 타입의 값을 하나의 단위(타입)으로 묶어서 구성한 복합적인 자료구조
 * 
 * 객체는 프로퍼티(Property, 속성)로 구성된 집합
 * 그러한 프로퍼티는 키(key)와 값(Value)로 구성됨
 */

const dog = { age: 2 }; // age 프로퍼티에 정수형 값 2 할당
console.log(dog);

console.log(dog.age); // 프로퍼티 조회, 강아지는 몇살?

const cat = { age: 5 };
console.log(cat.age);

const ages = [2, 5];
console.log('강아지의 나이는', ages[0]);

const dog2 = {
    age: 2, // comma(,) 기호를 통해 개행해서 2개의 이상의 프로퍼티 작성
    name: 'toto',
    walk: () => console.log('강아지가 걷는다'),
    /*
        -> JS에서 사용할 수 있는 모든 값은 프로퍼티의 값이 될 수 있음
        함수는 일급 객체이기 때문에 값이 될 수 있고,
        따라서 객체의 프로퍼티가 될 수도 있음
    */
    address: {
        si: '서울시',
        gu: '마포구',
        dong: '상암동'
    }
};

console.log(dog2);
console.log(dog2.address);
console.log(`${dog2.name}가 사는 곳은${dog2.address.si + dog2.address.gu + dog2.address.dong}입니다.`);

// 디스트럭쳐링(de-structuring) 구조(Structure)를 분해(de)
// 객체 디스트럭쳐링(de-structuring) 객체의 구조(Structure)를 분해(de)
// -> { }로 작성된 일련의 객체만의 구조를 다시 풀어헤침

const { si:ssi, gu, dong } = dog2.address; // {si: '서울시', gu: '마포구', dong: '상암동'}
console.log(ssi); // 서울시

console.log(`${dog2.name}가 사는 곳은${ssi + gu + dong}입니다.`);