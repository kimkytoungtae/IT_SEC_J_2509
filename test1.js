//node test1.js

let a = 1;
let b = 1;
let c = a + b;

a + 3;
//console.log(`a:${a}`); // 1
a = a + 3;
//console.log(`a:${a}`); // 4

a=1;

// ++ -- 요놈은 특수연산
// = 대입 연산자가 없어도, 값을 바꿔요
a++;
//console.log(`a: ${a}`);


/* 여러줄 주석
상수 : 한번 정하면 절대 바뀌지 않는 변수
*/
const con1 = 3;

a = 1;
b = "2";
c = a + b;
//console.log(`c: ${c}`);

/*
num1 이라는 변수를 선언하고 3 이라는 값으로 초기화 해주세요
num2 라는 변수를 선언하고 2 라는 값으로 초기화 해주세요
result 라는 변수를 선언하고, num1/num2 값으로 초기화 해주세요
*/
let num1 = 3;
console.log(`num1: ${num1} `);
let num2 = 2;
console.log(`num2: ${num2} `);
let result = num1/num2;
console.log(`result: ${result} `);

let array = [num1, num2, 3, 4];
console.log(`array 서랍의 첫번째 array[0] : ${array[0]}`);