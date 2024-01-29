let numOne='';
let operator=""; //플러스
let numTwo= "";

const $operator = document.querySelector('#operator')
const $input = document.querySelector('#result');
//함수가 함수를 실행 = 고차함수
const onClickNumber=(event)=>{
  if(!operator){ //비어있을때
    numOne+= event.target.textContent//눌렀으면 one에 넣기 
    $result.value+=event.target.textContent;
    return;
   
  }
    if(!numTwo){//비어있지않을때
      $result.value='';
    }
    numTwo+= event.target.textContent//눌렀으면 one에 넣기 
    $result.value+=event.target.textContent;

  }
 
 
  
 
//거의 대부분 같은데 조금 다른 부분들은 매개변수로 만들어라= 고차함수 


//숫자버튼 클릭할때                                            //함수자리
document.querySelector('#num-0').addEventListener('click',onClickNumber);
document.querySelector('#num-1').addEventListener('click',onClickNumber);
document.querySelector('#num-2').addEventListener('click',onClickNumber)
document.querySelector('#num-3').addEventListener('click',onClickNumber)
document.querySelector('#num-4').addEventListener('click',onClickNumber)
document.querySelector('#num-5').addEventListener('click',onClickNumber)
document.querySelector('#num-6').addEventListener('click',onClickNumber)
document.querySelector('#num-7').addEventListener('click',onClickNumber)
document.querySelector('#num-8').addEventListener('click',onClickNumber)
document.querySelector('#num-9').addEventListener('click',onClickNumber)


const onClickOperator=(op)=>()=>{
  if(numOne){
    operator =op;
    $operator.value=op;
    
  }else{
    alert('숫자를 입력하세요')
  }
}





document.querySelector('#plus').addEventListener('click',onClickNumber('+'));
document.querySelector('#minus').addEventListener('click',onClickNumber('-'));
document.querySelector('#divide').addEventListener('click',onClickNumber('/'));
document.querySelector('#divide').addEventListener('click',onClickNumber('*'));
document.querySelector('#calculate').addEventListener('click',()=>{
  if(numTwo){ //두번째 숫자가 비어있지않으면 
    switch(operator){//첫번째 숫자와 2번째 숫자 연산자 적용 숫자 계산
      case '+':
        $result.value= parseInt(numOne)+parseInt(numTwo);
        break;
          case '-':
          $result.value= numOne-numTwo;
          break;

          case '*':
          $result.value= numOne*numTwo;
          break;

          case '/':
          $result.value= numOne/numTwo;
          break;
          
          default:
            break;
    }
  }else{//두번째 들어올 숫자가 비어있으면
    alert('숫자를 먼저 입력하세요') 
  }
});

document.querySelector('#clear').addEventListener('click',()=>{
  numOne ='';
  numTwo='';
  operator='';

  $operator.value='';
  $result.value='';

});