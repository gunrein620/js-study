/**
 * Prototype chain
 */

const Obj = {};

/**
 * __proto__ 모든 객체에 존재하는 프로퍼티다.
 * Class 중 상속에서 부모 클래스에 해당되는 값
 */
console.log(Obj.__proto__);

function IdolModel(name, year){
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype);

// console.dir(IdolModel.prototype, {
//   showHidden: true,
// });

// circular reference 서로가 서로를 참조하는 형태
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(Obj.__proto__ === Object.prototype);
console.log('-'.repeat(45));
 
console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
  this.name = name;
  this.year = year; 

  // 이 방식은 상속체인을 활용하지 못함
  this.sayHello = function() {
    return `${this.name}이 인사를 합니다.`
  }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002)

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello()); 
console.log(yuJin2.sayHello() === wonYoung2.sayHello());

// hasOwnProperty -> 고유의 프로퍼티임? 물어보는 함수 
console.log(yuJin2.hasOwnProperty('sayHello')); // true -> 상속x | false -> 상속받음 

// 상속체인을 활용하여 공유하는 코드작성하기 
 function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
 }

 // 상속체인 활용! 
 IdolModel3.prototype.sayHello = function(){
  return `${this.name}이 인사를 합니다.`
 }

const yuJin3 = new IdolModel3('안유진' , 2003);
const wonYoung3 = new IdolModel3('장원영' , 2002);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello);

// 상속체인을 활용하여 코드를 공유한 상태에서 고유의 프로퍼티인지 확인하기 
console.log(yuJin3.hasOwnProperty('sayHello')); // false 가 나옴 즉, 상속을 받는 프로퍼티임 

