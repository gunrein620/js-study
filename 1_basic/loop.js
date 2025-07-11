// for loop

for(let i = 0; i < 10; i++){
  console.log(i);
}

console.log('-'.repeat(40));// 구분선

for(let i = 10; i > 0; i--){
  console.log(i);
}
console.log('-'.repeat(40));// 구분선

// 2중 루프 
for(let i = 0; i < 3; i++){
  for(let j = 3; j > 0; j--){
    console.log(i, j);
  }
}

// 6x6 * 사각형 만들기 

// 방법1 
for(let i = 0; i < 6; i++){
  let line = '';
  for(let j = 0; j < 6;j++){
    line += '*';
  }
  console.log(line);
}

console.log('-'.repeat(40));// 구분선

//방법2 
let square = ''
let side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++ ){
    square += '*';
  }
  square += '\n';
}
console.log(square);

// [for in](키) vs [for of](값)
//

// for...in -> key 값 

const kim = {
  name: '김철수',
  year: 2003,
  nation: 'kor'
}

for(let key in kim){
  console.log(key);
}

const iveMembersArray = ['안유진','가을','레이','장원영','리즈','이서'];

for(let key in iveMembersArray){
  console.log(key);
  console.log(`${key} : ${iveMembersArray[key]}`);
}
console.log('-'.repeat(40));// 구분선

// for...of (값 : value)
// list에서 사용 
for(let value of iveMembersArray){
  console.log(value);
}

// while loop

let number = 0;

while(number < 10){
  console.log(number);
  number++
}
console.log('-'.repeat(40));// 구분선

// do...while
let number2 = 0;
do{
  number2++;
  console.log(number2);
}while(number2 < 10);
console.log('-'.repeat(40));// 구분선

// continue
for(let i = 0; i < 10; i++){
  if(i === 5){
    continue // 5를 skip
  }
  console.log(i);
} 
