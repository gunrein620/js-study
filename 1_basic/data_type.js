// object 중괄호!!

const dictionary = {
  // 키 : 밸류 
  apple : '사과',
  banana : '바나나',
  greeting : 'hello'
}

console.log(dictionary); // 전체보여줨
console.log(dictionary['apple']); // 키 -> 밸류 
console.log(dictionary['바나나']); // 밸류 -> undefined
console.log(typeof dictionary); // object 타입
console.log('-'.repeat(50)); // 구분선 

// array 
// 타입은 Object 
// 값을 리스트로 나열 할 수 있는 타입 
// object 중괄호 대비 array는 대괄호 

const colorArray = [
  'red', // index : 0
  'orange', // index : 1 
  'green',
  'blue',
  'black',
  'cyan'
]

console.log(colorArray);

// index = 0번 부터 시작 ~ 
console.log(colorArray[1]);

/**
  static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시함 
  ex)_ C 
  dynamic typing -> 타입의 명시적 선언 x, 값의 상태를 추론하여 타입지정
  ex)_ JS

 */