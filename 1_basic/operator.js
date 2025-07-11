let number = 1;
let result = 0;

// 후위연산자 
result = number++
console.log(result, number); // 1, 2
result = number-- 
console.log(result, number); // 2, 1
console.log('-'.repeat(40));

// 전위연산자 (일반적으로 많이 안씀)
result = ++number
console.log(result, number);
result = --number
console.log(result, number);