//기존 방식
// function Hello(n) {
//       if ( n == '1') alert("안녕하세요");
//       else alert('반갑습니다.'); 


// console.log('콘솔입니다.');
// }

//화살표함수
const Hello = (n) => {
      // ==, ===을 비교
      if (n == '1') alert("안녕하세요");
      else alert('반갑습니다.');
}

const CheckVar = () => {
      // x = 10 ;

      // var x ;
      let x;
      x = 'test';
      // console.log('x =' + x) ;
     // console.log(`x = ${x}`)

      const y = '20';
      // y = 40;
      // console.log('x =' + x) ;
      alert(`x type = "${typeof (x)}", y type = "${typeof(y)}"`);
      alert(`문자열 "${x}"는 문자인가요? ${isNaN(x) ? '예' : '아니오'}`);
      alert(`문자열 "${y}"은 문자인가요? ${isNaN(y) ? '예' : '아니오'}`);
}