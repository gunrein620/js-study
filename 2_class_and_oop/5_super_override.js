//super & override

class IdolMoldel{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  sayHello(){
    return `안녕하세요! ${this.name} 입니다.`;
  }
}

class FemaleIdolModel extends IdolMoldel {
  // 노래 | 춤 
  part;

  // part 라는 property가 추가 되었으니 Override 해야지! 
  constructor(name,year,part){ 
    super(name,year); // 부모클래스 있는건 슈퍼로 ㄱㄱ 
    this.part = part;
  }

  sayHello(){
    //return `안녕하세요~! ${this.name}입니다. 저는 파트:${this.part} 를 맡고 있습니다.`;
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }
}

const yuJin = new FemaleIdolModel('안유진',2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolMoldel('장원영',2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());


class MaleIdolMoel extends IdolMoldel {
  sing(){
    `남자 아이돌이 노래를 부릅니다.`; 
  }
}



