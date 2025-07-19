/**
 * Property Attribute
 * 
 * 1. 데이터 프로퍼티: 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2. 액세서 프로퍼티: 자체적으로 값을 갖고 있지 않지만 다른값을 가져오거나 
 *                 설정할때 호출되는 함수로 구성된 프로퍼티 ex). Getter * Setter
 * 
 */
const yuJin = {
  name: '안유진',
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1. value - 실제 프로퍼티의 값
 * 2. writalbe - 값을 수정 할 수 있는지 여부. false로 수정시 프로퍼티값을 수정할 수 없다.
 * 3. enumerable - 열거가 가능한지에 대한 여부이다. for...in 사용가능하면 true
 * 4. configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. 
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

// 이건 모든 프로퍼티 속성을 볼 수 있는 것임 
console.log(Object.getOwnPropertyDescriptors(yuJin));

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
console.log(yuJin2.age);
console.log(yuJin2.year);

yuJin2.age =32;
console.log(yuJin2.age);
console.log(yuJin2.year);

//엑서서 프로퍼티 확인하는 법 
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
/**
 * 이런식으로 나오면 엑서 프로퍼티! 
 * {
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
 */