/**
 * Using function to create object
 */
function IdolModel(name, year){
  if(!new.target){
      return new IdolModel(name, year);
  }
  
  this.name = name;
  this.year = year;

  // return 123; <- 가능은 하지만 쓰지마셈 
  this.dance = function(){
    return `${this.name}이 춤을 춥니다.`
  }
}

const yuJin = new IdolModel('안유진', 2003);
//console.log(yuJin);
//console.log(yuJin.dance());

// New 키워드 없이 쓰면? 
const yuJin2 = IdolModel('안유진',2003);
//console.log(yuJin2);// undefined 가 나옴 반환해주는것이 없음 함수임 
//console.log(global.name);


const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
}

// const yuJin3 = new IdolModelArrow('안유진', 2003); 에로우 함수 new 쓸 수 없다.