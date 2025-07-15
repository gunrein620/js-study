/**
 * try...catch
 * 
 * 1. 발생시킬때 -> 던진다고 한다. (throw)
 * 2. 명시적으로 인지할때 -> 잡는다고 한다. 
 */

function runner() {
  try{
    console.log('good day~');

    throw new Error('에러발생!!')
  
    console.log('gunrein620~');
  }catch(e){
    console.log('===catch===');
    console.log(e);
  } finally {  // 에러를 잡든 안잡든 걍 실행 
    console.log('===Finally===');

  }
}
runner()