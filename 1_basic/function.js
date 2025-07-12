 /**
  * 가정.
  * 2 라는 숫자에 * 10/ 2 % 3 스트링으로 반환 해서
  * 받고 싶다면 ?
  */

 console.log((2*10 / 2 % 3).toString());

 // 3 이면 똑같은 코드 또 씀;;
 console.log((3*10 / 2 % 3).toString());

 /**
  * DRY 원칙 
  * D -> don't
  * R -> repeat
  * Y -> yourself
  */

 function calculate(number) {
  console.log((number*10 / 2 % 3).toString());

 }
 /**
  * 함수에서 입력받은 값의 대한 정의를 parameter
  * 실제 입력하는 값은 argument 
  */
 calculate(4);
 calculate(5);

 // 여러개의 파라미터를 받는 경우 (1,2,3) 순서대로 넣으면 됨 

 function multiply(x,y) {
    console.log(x * y);
 }

 multiply(2,4); 

 //default parameter 
 // 1. 입력을 주면 입력준 값으로 동작 
 // 2. but 입력은 안주면 디폴트값으로 동작

 function multiply(x,y = 10) {
  console.log(x * y);
}
multiply(2,4); // 8 
multiply(2); // 20