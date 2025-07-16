// Inheritance 

class Idolmodel{
  name;
  year;
 
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends Idolmodel{
  dance(){
    return `${this.name}! 춤을 춥니다.`;
  }
 }

class MaleIdolMoel extends Idolmodel{
  sing(){
    return `${this.name}!! 노래를 부릅니다.`;
  }
}
   
const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolMoel('지민',1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

// 자식클래스는 부모 프로퍼티 사용가능 형제 클래스 속성사용불가~ 
const gr620 = new Idolmodel('gunrein620',1996);
console.log(gr620);
console.log(gr620.name);
console.log('-'.repeat(50));

/**
 * IdolModel
 *   - Female
 *   - male
 */

console.log(yuJin instanceof Idolmodel); //ture
console.log(yuJin instanceof FemaleIdolModel);// true
console.log(yuJin instanceof MaleIdolMoel);// false
console.log('-'.repeat(50));

console.log(jiMin instanceof Idolmodel); // true 
console.log(jiMin instanceof FemaleIdolModel); // false 
console.log(jiMin instanceof MaleIdolMoel); // true
console.log('-'.repeat(50));

console.log(gr620 instanceof Idolmodel); // true 
console.log(gr620 instanceof FemaleIdolModel); // false 
console.log(gr620 instanceof MaleIdolMoel); // false