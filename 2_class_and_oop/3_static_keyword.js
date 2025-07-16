// static 클래스에 귀속됨 

// class Idolmodel{
//   name;
//   year;
//   static groupName = 'IVE'

//   constructor(name, year){
//     this.name = name;
//     this.year = year;
//   }
//   static returnGroupName(){
//     return `아이브`;
//   }
// } 

// const yuJin = new Idolmodel('안유진', 2003);
// console.log(yuJin);  
// console.log(Idolmodel.groupName);
// console.log(Idolmodel.returnGroupName());

// ** factory constructor 
class Idolmodel{
  name;
  year;
  constructor(name,year){
    this.name = name;
    this.year = year
  }

  static fromObject(object){
      return new Idolmodel(
        object.name,
        object.year,
      )
  }

  static fromList(list) {
    return new Idolmodel(
      list[0],
      list[1],
    )
  }
}

const yuJin2 = Idolmodel.fromObject({
  name: '안유진',
  year:  2003,
})

console.log(yuJin2);

const wonyooung = Idolmodel.fromList([
  '장원영',2003
])
console.log(wonyooung);