/**
 * class keyword 
 */
class Idolmodel{
  //name;
  //year; 
  constructor(name,year) {
    this.name = name;
    this.year = year;
  }
  sayName(){
    return console.log(`안녕하세요 저는 ${this.name}입니다`);
  }
}

// constructor
const yuJin = new Idolmodel('안유진', 2003);
const gaeul = new Idolmodel('가을', 2002);
const ray = new Idolmodel('레이', 2004);
const wonYoung = new Idolmodel('장원영', 2004);
const liz = new Idolmodel('리즈', 2004);
const eseo = new Idolmodel('이서', 2007);
console.log(wonYoung);
console.log(gaeul);
console.log(ray);
console.log(yuJin);
console.log(liz);
console.log(eseo);

console.log('-'.repeat(45));
console.log(wonYoung.name);
console.log(wonYoung.sayName());

console.log(typeof Idolmodel);
console.log(typeof yuJin);