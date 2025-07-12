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
