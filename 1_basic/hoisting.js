// hoisting
// 모든 변수의 선언문이 코드의 최상단으로 이동되는 것 처럼 느껴지는 현상 

console.log('hello');
console.log('world');

console.log(name);
var name = 'gunrein'
console.log(name);
//실행이 됨 

// let 과 const 를 쓰는 이유는 
// var는 hoisting 을 막아주지 못하는데 
// let const 에러를 잡아줄수 있다 

//err 가 나옴 
console.log(good);
let good = 'goood'; 