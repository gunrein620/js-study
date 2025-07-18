let number = 1;
let result = 0;

// 후위연산자 
result = number++
console.log(result, number); // 1, 2
result = number-- 
console.log(result, number); // 2, 1
console.log('-'.repeat(40));

// 전위연산자 (일반적으로 많이 안씀)
result = ++number
console.log(result, number);
result = --number
console.log(result, number);
console.log('-'.repeat(40));

let sample = '99'
console.log(sample + 1); // 99 + 1 = 991 

sample = true // 1 
console.log(+sample);
console.log(typeof sample); // boolean
console.log(typeof +sample); // number


sample = false // 0
console.log(typeof sample); //boolean
console.log(typeof +sample); // number
console.log('-'.repeat(40));


// NaN = not a number 
sample = '강아지'
console.log(+sample);
console.log(-sample);

sample = '99';
console.log(+sample);
console.log(-sample); 
console.log('-'.repeat(40));

// 할당연산자 assignment operator
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);
console.log('-'.repeat(40));

// 바교연산자

// 값의 비교
// 값과 타입의 비교 

console.log(5 == 5); // True
console.log(5 == '5'); // True
console.log(0 == ''); // True
console.log(true == 1); // True
console.log(true == '1'); // True
console.log(false == 0); // True
console.log('-'.repeat(40));

console.log(5 === 5); // True
console.log(5 === '5'); // False
console.log(0 === ''); // False
console.log(true === 1); // False
console.log(true === '1'); // False
console.log(false === 0); // False
console.log('-'.repeat(40));

console.log(5 != 5); // False
console.log(5 != '5'); // False
console.log(0 != ''); // False
console.log(true != 1); // False
console.log(true != '1'); // False
console.log(false != 0); // False
console.log('-'.repeat(40));

console.log(5 !== 5); // False
console.log(5 !== '5'); // True
console.log(0 !== ''); // True
console.log(true !== 1); // True
console.log(true !== '1'); // True
console.log(false !== 0); // True
console.log('-'.repeat(40));

/**
 단축평가 (short circuit evaluation)

 좀 이상한 느낌이긴 한데 걍 외우기 ㄱㄱ 

 &&를 사용했을때 좌측이 True 면 우측값 반환 
 &&를 사용했을때 좌측이 False 면 좌측값 반환 
 ||를 사용했을때 좌측이 True 면 좌측값 반환  
 ||를 사용했을때 좌측이 False 면 우측값 반환 
 */

 console.log(true && '강아지'); // 강아지 
 console.log(false && '강아지'); //false
 console.log(true || '강아지'); // true
 console.log(false || '강아지'); // 강아지

 console.log(true && true && 'dog'); // dog 
 console.log(true && false && 'dog'); //false
console.log('-'.repeat(40));

/*
지수 연산자 
*/
console.log(2 ** 2);
console.log(10 ** 3);

// null 연산자 
let name;
console.log(name);

name = name ?? '강아지' // ?? => 좌측값이 null || undefine 이면 우측값 반환해라
console.log(name);

name = name ?? '고양이' // name 값이 이미 '강아지'로 할당됨 
console.log(name);

let name2;
name2 ??= '코끼리'
console.log(name2);
