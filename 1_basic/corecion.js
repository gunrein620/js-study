// 타입변환 
// type conversion
//1. 명시적 2. 암묵적 

let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + ''; // 숫자 + 스트링 = 스트링 
console.log(typeof test, test);

console.log('98' + 2); // 98 2 
console.log('98' * 2); // 196 why? 스트링에서 * 가 없으니까 걍 숫자 연산해버림
console.log('98' - 2); // 역시 스트링에 - 없으니 숫자연산함

// 암묵적인거 별로 좋지 않음 사용하지 말자 
console.log('-'.repeat(40));// 구분선

// 명시적변환 예시 <- 이게 더 서로 이해하기 좋음 
console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());

// 숫자 타입으로 변환시 
console.log(typeof parseInt('0'),parseInt('0'));
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));
console.log(typeof +'1', +'1');
console.log('-'.repeat(40));

// boolean 타입 변환 
// string '' <- 안에 값이 있으면 true 
console.log(!'x'); // false
console.log(!!'x'); // true
console.log(!!''); // false
console.log(!!0); //false
console.log(!!'0'); //true 
console.log(!!false); //false
console.log(!!undefined); //false
console.log(!!null); //false>

console.log(!!{}); // object => 무조건 True
console.log(!![]); // array => 무조건 True

/**
 * 정리 
 * 1. 아무글자가 없는 스트링  -> ''  == false
 * 2. 값이 없는경우 == false 
 * 3.  0 == false 
 */