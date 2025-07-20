/**
 * Immutable Object
 */

const yuJin = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yuJin);

// Extensible 확장가능성 
console.log(Object.isExtensible(yuJin)); // true , 즉 프로퍼티을 추가할 수 있는 상태임 

yuJin['position'] = 'vocal';

console.log(yuJin);

console.log('-'.repeat(45));
Object.preventExtensions(yuJin); // 확장성 예방하기 -> false 로 바뀜 !! 
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = 'Ive';
console.log(yuJin);

delete yuJin['position']; // 이때 값을 삭제는 가능, 추가 x 
console.log(yuJin);
console.log('-'.repeat(45));

/**
 * Seal. 봉인이 되어있냐? 아니냐? Extensiable 와 상반되는 개념이네? 
 * 하지만 Extensiable은 삭제가 가능해, seal은 삭제도 안돼!!!!! 
 */
const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yuJin2);
console.log(Object.isSealed(yuJin2)); // false

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2)); // ture 

yuJin['groupName'] = 'Ive';
console.log(yuJin2);

delete yuJin['name']; // 삭제시도 -> ㄴㄴ Seal은 삭제도 안됨 
console.log(yuJin2);

Object.defineProperty(yuJin2,'name',{
  value: 'gunrein',
});
Object.defineProperty(yuJin2,'name',{
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'));
console.log('-'.repeat(45));

/**
 * Freezed !동결!  writalbe 까지도 false로 만들어버림! 
 * 가장높은수준의 불변객체 -> 읽기외 모든기능을 불가능하게 만든다. 
 */
const yuJin3 = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}
console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin['groupName'] = 'Ive';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name' {
//   value: 'gunrein',
// })
// console.log(yuJin3);

console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'));

// 상위오브젝트가 얼어도 하위 오브젝트가 같이 얼지는 않는다. 
// 이는 Extansiale , seal 또한 동일하다 

const yuJin4 = { 
  name: '안유진',
  year: 2003,
  wonYoung: {
    name: '장원영',
    year: 2004,
  }
}

Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));

// 그렇다면 객체안쪽의 객체도 얼었을까? 

console.log(Object.isFrozen(yuJin4['wonYoung'])); // false 얼지 않았다 
