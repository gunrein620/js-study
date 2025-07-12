 /**
  * 가정.
  * 2 라는 숫자에 * 10/ 2 % 3 스트링으로 반환 해서
  * 받고 싶다면 ?
  */

 console.log((2*10 / 2 % 3).toString());

 // 3 이면 똑같은 코드 또 씀;;
 console.log((3*10 / 2 % 3).toString());

 /**
  * DRY 원칙 
  * D -> don't
  * R -> repeat
  * Y -> yourself
  */

 function calculate(number) {
  console.log((number*10 / 2 % 3).toString());

 }
 /**
  * 함수에서 입력받은 값의 대한 정의를 parameter
  * 실제 입력하는 값은 argument 
  */
 calculate(4);
 calculate(5);

 // 여러개의 파라미터를 받는 경우 (1,2,3) 순서대로 넣으면 됨 

 function multiply(x,y) {
    console.log(x * y);
 }

 multiply(2,4); 

 //default parameter 
 // 1. 입력을 주면 입력준 값으로 동작 
 // 2. but 입력은 안주면 디폴트값으로 동작

 function multiply(x,y = 10) {
  console.log(x * y);
}
multiply(2,4); // 8 
multiply(2); // 20

console.log('-'.repeat(40));

// return 
// 값을 반환받기 
// 리턴된 값을 변수에 넣어 활용 

function multiply(x,y) {
  return x * y;
}

const result1 = multiply(2,4);
console.log(result1);

//arrow function : 화살표 함수 
const multiply2 = (x,y) => {
  return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

// parameter 1개 일 경우 () 생략도 가능 
const multiply4 = x => x * 2;
console.log(multiply4(2));

// 중첩함수 
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7)); 

// 풀어쓴 경우 
function multiply6 (x) {
  return function(y){
    return function(z){
      `x: ${x} y: ${y} z: ${z}`;
    }
  }
}
console.log(multiply5(4)(6)(8)); 
console.log('-'.repeat(40));


const multiplyThree = function(x,y,z) {
  console.log(arguments);
  return x * y * z;
}
console.log(multiplyThree(4,5,6));


const multiplyAll = function(...arguments){
  return Object.values(arguments).reduce((a,b) => a * b,1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));