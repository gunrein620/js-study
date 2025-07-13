//object 객체 

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
      return `${this.name}이 춤을 춥니다.`
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);
console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group'
const groupValue = '아이브';

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function(){
    return `${this.name}이 춤을 춥니다.`
  }
}

console.log(yuJin2);
console.log(yuJin2.dance());

// 속성값 바꾸기 
yuJin2['group'] = 'gunrein'
console.log(yuJin2);

// 없는 속성 추가해버리기~
yuJin2['engName'] = 'An Yu Jin';
console.log(yuJin2);

// 속성삭제하기 
delete yuJin2['engName'];
console.log(yuJin2);

/**
 * [객체의 특징]
 * 1. const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2. 객체안의 프로퍼티나 메서드는 변경 할 수 있다.
 */