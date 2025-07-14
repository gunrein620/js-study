/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 Primitive 값은 Copy by value다 
 * 2. 객체는  copy by reference 이다 .
 */

let original = 'hello';
let clone = original;

clone += '안유진 입니다.';

// 값에 의한 복사 
console.log(original);
console.log(clone);

console.log('-'.repeat(45));

let originalObj = {
  name: '안유진',
  group: '아이브',
}

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('-'.repeat(45));

// 참조에 의한 복사 
originalObj['group'] = 'gunrein'
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
  name: 'gunrein',
  group: 'IEV',
}

cloneObj = {
  name: 'gunrein',
  group: 'IEV',
}
console.log(originalObj === cloneObj); //false 
console.log('-'.repeat(45));


const yuJin1 = {
  name: 'yugin1',
  group:'IVE',
}

const yugin2 = yuJin1
const yugin3 = {
  name: 'yugin1',
  group:'IVE',
}

console.log(yuJin1 === yugin2); // ture
console.log(yuJin1 === yugin3); // false
console.log(yugin2 === yugin3); // false

/**
 * spread Operator : 값에 의한 복사 
 */
const yugin4 = {
    ...yugin3
}
console.log(yugin4);
console.log(yugin4 === yugin3);

const yugin5 = {
    yaer: '2003',
    ...yugin3,
}
console.log(yugin5);

// 순서가 중요함 !!! 
// 속성을 바꾸는 시도를 하면? 
const yugin6 = {
  name:'gunrein',
  ...yugin3,
}
console.log(yugin5); // 네임 속성은 바뀌지 않음 

// Spread operator 이후 속성 수정시도함 
const yugin7 = {
  ...yugin3,
  name: 'gunrein'
}
console.log(yugin7);// 속성 바뀜!! 

// 이것은 array도 순서가 중요함 !!! 

const numbers = [1,3,5];
const numbers2 = [
  10, // 먼저 넣으면 ?
  ...numbers,
  ]
console.log(numbers2); // 10, 1, 3, 5

const numbers3 = [
  ...numbers,
  10, // 나중에 넣으면? 
  ]
console.log(numbers3); // 1, 3, 5, 10
