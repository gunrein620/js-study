//getter & setter

class Idolmodel{
  //name;
  //year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  get nameAndYear(){ // 함수처럼 정의했지만 호출시 () 안됨 
    return `${this.name}-${this.year}`
  }

  set setName(name){ // 값을 새로 저장할때 
      this.name = name;
  }   
}

const wonYoung = new Idolmodel('장원영',2004);
console.log(wonYoung);
console.log(wonYoung.nameAndYear); // 호출시 () 안됨 

wonYoung.setName = '안유진';
console.log(wonYoung);

console.log('='.repeat(50));

class Idolmodel2{ // private : 외부접근 x | 표현식: # 
  #name;
  year;

  constructor(name, year){
    this.#name = name;
    this.year = year;
  }

  get getName(){
    return this.#name;
  }

  set setName(name){
    this.#name = name; 
  }
}

const wonYoung2 = new Idolmodel2('wonyooung',2004); // insert property ok~
console.log(wonYoung2); // #name can not access to name | why? #! <- private
console.log(wonYoung2.getName);

wonYoung2.name = 'change name?' // setName으로 바꾸어야 함 
console.log(wonYoung2.getName);
wonYoung2.setName = '장원영'
console.log(wonYoung2.getName);

