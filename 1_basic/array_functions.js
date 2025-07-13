/**
 * Array Function
 */

let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
]
console.log(iveMembers);

// push()
console.log(iveMembers.push('gunrein'));
console.log(iveMembers);
console.log('-'.repeat(40));

// pop()
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('-'.repeat(40));

// shift()
console.log(iveMembers.shift());
console.log(iveMembers); 

//unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
console.log('-'.repeat(40));
 
//splice
//(삭제시작인덱스, 얼마나 삭제할지)
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log('='.repeat(40));

//
  iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
]

// concat() 아예 다른 메모리에 올려버림 
// such as push
console.log('concat()');
console.log(iveMembers.concat('gunrein')); // array 에 넣어도 
console.log(iveMembers); // 해당변수 변화없음 
console.log('-'.repeat(40));


// slice() 아예 다른 메모리에 올려버림 
// such as splice
console.log('slice()');
console.log(iveMembers.slice(0,3));
console.log(iveMembers);
console.log('-'.repeat(40));

//spread operator ->  ...
console.log('spread operator');

// list 안의 값을 펼쳐서 넣어줌 
let iveMembers2 = [
  ...iveMembers
]
console.log(iveMembers2);

// ... 안붙이면? 리스트 안에 리스트가 들어감 역시 걍 컴터는 시키는대로 해버림;;
let iveMembers3 = [
  iveMembers
] 
console.log(iveMembers3); // 역시 리스트 안에 리스트가 들어가버림
console.log('-'.repeat(40));

// 걍 변수에 넣으면 ? 
let iveMembers4 = iveMembers;

console.log(iveMembers4); // ㅇㅇ 잘 들어옴 
console.log(iveMembers4 === iveMembers); // 당연히 ~ true!

// 그렇다면 spead 는 같을까? false 이다 
console.log('-'.repeat(40));


//join() type -> string | '1,2,3,4'  
console.log(iveMembers.join());
console.log(iveMembers.join('/')); // 나눔의 기준이 되는 문자 입력가능 
console.log('-'.repeat(40));

// sort()
//오름차순  ㄱ -> ㅎ || a -> z
iveMembers.sort();
console.log(iveMembers); 

// reverse() : 현재기준 거꾸로 정렬  
console.log(iveMembers.reverse());
console.log('-'.repeat(40));

let numbers = [
   1,9,7,5,3
]
console.log(numbers);

/**
 * a,b를 비교했을 때 
 * 1. a를 b 보다 나중에 정렬하려면(뒤에 두려면) 0보다 큰 숫자를 반환
 * 2. a를 b 보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자를 반환 
 * 3. 원래 순서를 그대로 두려면 0을 반환 
*/
numbers.sort((a,b)=>{
  return a > b ? 1: -1
})
console.log(numbers);

numbers.sort((a,b)=>{
  return a > b ? -1: 1
})
console.log(numbers);

console.log('-'.repeat(40));
//map()
console.log(iveMembers.map((x)=>x));
console.log(iveMembers.map((x)=>`아이브 : ${x}`)); 

console.log(iveMembers.map((x)=>{
  if(x === '안유진'){
    return `IVE: ${x}`;
  }else return x;
})); 