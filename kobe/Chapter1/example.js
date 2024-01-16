// 이중 슬래시 뒤에 오는 내용은 모두 주석.
// 주석은 JS 코드에 대한 설명이니 주의 깊게 읽어야 함.

// 변수는 값을 나타내는 이름.
// 변수는 let 키워드로 선언.
let x;                  // x 라는 변수를 선언함.

// = 기호를 사용해서 변수에 값을 할당할 수 있음.
x = 0;                  // 이제 변수 x의 값은 0
x                       // => 0: 변수는 그 값으로 평가됨.

// 자바스크립트는 여러 가지 값 타입을 지원함.
x = 1;                  // 숫자
x = 0.01;               // 숫자는 정수일 수도, 실수일 수도 있음.
x = "hello world";      // 큰따옴표에 감싸인 문자열
x = 'JavaScript';       // 작은따옴표도 문자열을 감쌀 수 있음.
x = true;               // 불 값
x = false;              // 다른 불 값
x = null;               // null은 '값이 없다'는 뜻의 특별한 값.
x = undefined;          // undefined도 null처럼 또 다른 특별한 값.

// 자바스크립트에서 가장 중요한 데이터 타입은 객체임.
// 객체는 이름-값 쌍의 집합, 또는 문자열과 값의 연결.
let book = {                // 객체는 중괄호로 감싸 표현.
    topic: "JavaScript",    // "topic" 프로퍼티의 값은 "JavaScript"임.
    edition: 7              // "edition" 프로퍼티의 값은 7.
};                          // 이 중괄호는 객체의 끝을 나타냄.

// 객체의 프로퍼티는 , 또는 []로 접근함.
book.topic                  // => "JavaScript"
book["edition"]             // => 7: 프로퍼티 값에 접근하는 다른 방법.
book.author = "Flanagan"    // 할당을 통해 프로퍼티를 새로 만듦.
book.contents = {};         // {}는 프로퍼티가 없는 빈 객체임.

// ?를 통한 조건부 접근(ES2020)
book.contents?.ch01?.sect1  // => undefined: book.contents에는
                            //    ch01 프로퍼티가 없습니다.

// 자바스크립트는 배열, 즉, 숫자로 인덱스된 리스트 역시 지원.
let primes = [2, 3, 5, 7];  // 값이 4개 있는 배열입니다. [와 ]로 감쌉니다.

primes[0]                   // => 2: 배열의 첫 요소(index 0)
primes.length               // => 4: 배열의 요소 개수
primes[primes.length-1]     // => 7: 배열의 마지막 요소
primes[4] = 9;              // 할당을 통해 요소를 새로 만듭니다.
primes[4] = 11;             // 할당을 통해 요소의 값을 바꿉니다.
let empty = [];             // []는 요소가 없는 빈 배열입니다.
empty.length                // => 0: 빈 배열의 요소 개수

// 배열과 객체에 다른 배열과 객체를 담을 수 있습니다.
let points = [              // 요소가 2개 있는 배열
    {x: 0, y: 0},           // 각 요소는 객체입니다.
    {x: 1, y: 1}            
];

let data = {                // 프로퍼티가 2개 있는 객체
    trial1: [[1,2], [3,4]],  // 각 프로퍼티 값은 배열입니다.
    trial2: [[2,3], [4,5]]  // 배열의 요소는 배열입니다.
};