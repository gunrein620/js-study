const engDay = 'sun'

let korDay;

switch (engDay) {
  case 'mon':
    korDay = '월요일'
    break;
  case 'tue':
    korDay = '화요일'
    break;
  case 'wed':
    korDay = '수요일'
    break;
  case 'thu':
    korDay = '목요일'
    break;
  case 'fri':
    korDay = '금요일'   
     break;
  default:
    korDay = '주말'
}

console.log(korDay);