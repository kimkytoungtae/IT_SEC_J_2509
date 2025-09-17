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
console.log(`a: ${a}`);