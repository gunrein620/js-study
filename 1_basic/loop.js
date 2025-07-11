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

