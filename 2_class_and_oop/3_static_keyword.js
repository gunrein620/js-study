// static 클래스에 귀속됨 

class Idolmodel{
  name;
  year;
  static groupName = 'IVE'

  constructor(name, year){
    this.name = name;
    this.year = year;
  }
  static returnGroupName(){
    return `아이브`;
  }
} 

const yuJin = new Idolmodel('안유진', 2003);
console.log(yuJin);  
console.log(Idolmodel.groupName);
console.log(Idolmodel.returnGroupName());

