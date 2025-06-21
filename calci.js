function operate(x,y,operator){
     let a = parseFloat(x);
     let b = parseFloat(y);
     let val;
    if(operator=='+'){
        val = a+b;
    }
    else if(operator=='-'){
        val = a-b;
     }
    else if(operator=='*'){
       val = a*b;
     }
     else{
       if(b==0){
          return 'Error';
       }
       else{
          val = a/b;
       }
     }
     return val;
};

let firstvariable = "";
let secondvariable = "";
let isOperatorClicked = false;
let sign = '';

const myinput  = document.querySelectorAll('.digit');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const operator = document.querySelectorAll('.operator');
const calculate = document.querySelector('.calculate');
const screen = document.querySelector('.screen');
 
myinput.forEach(button => {
  button.addEventListener('click', () => {
    let temp = button.textContent;
    if(temp === '.' && ((!isOperatorClicked && firstvariable.includes('.')) || (isOperatorClicked && secondvariable.includes('.')))){
      return; 
    }
    if (!isOperatorClicked) {
      firstvariable += temp;
       screen.textContent = firstvariable;
    }
    else {
      secondvariable += temp;
      screen.textContent = secondvariable;
    }
  });
});

operator.forEach(button => {
  button.addEventListener('click',()=>{
    if(!isOperatorClicked){
      isOperatorClicked = true;
      sign = button.textContent;
      screen.textContent = sign;
    }
    else{
      if(firstvariable=="" || secondvariable==""){
         screen.textContent = 'Error';
          screen.textContent = 'Error';
         firstvariable = "";
         secondvariable = "";
         isOperatorClicked = false;
         sign = '';
      }
      else{
        let result = operate(firstvariable,secondvariable,sign);
        screen.textContent = result;
        sign = button.textContent;
        firstvariable = result.toString();
        secondvariable = "";
      }
    }
  })
});

calculate.addEventListener('click',function(){
   if(firstvariable=="" || secondvariable=="" || !isOperatorClicked){
       screen.textContent = 'Error';
       firstvariable = "";
       secondvariable = "";
       isOperatorClicked = false;
       sign = '';
   }
   else{
      let result = operate(firstvariable,secondvariable,sign);
      screen.textContent = result;
       firstvariable = result.toString();
       secondvariable = "";
       isOperatorClicked = false;
       sign = '';
   }
});

clear.addEventListener('click',function(){
   firstvariable = "";
   secondvariable = "";
   isOperatorClicked = false;
   sign = ''
   screen.textContent = "Calculator For You!!";
});

del.addEventListener('click',function(){
   if(secondvariable!=""){
      secondvariable = secondvariable.slice(0,-1);
      screen.textContent = secondvariable;
  }
  else if(sign !=''){
     sign = '';
     screen.textContent = firstvariable || "0";
  }
  else if(firstvariable!=""){
    firstvariable = firstvariable.slice(0,-1);
    screen.textContent = firstvariable;
  }
  else{
    screen.textContent = "Calculator For You!!"
  }
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if ((key >= '0' && key <= '9') || key === '.') {
    if (!isOperatorClicked) {   
      if (key === '.' && firstvariable.includes('.')) return;
      firstvariable += key;
      screen.textContent = firstvariable;
    } else {
      if (key === '.' && secondvariable.includes('.')) return;
      secondvariable += key;
      screen.textContent = secondvariable;
    }
  }

  else if (['+', '-', '*', '/'].includes(key)) {
    if (!isOperatorClicked) {
      isOperatorClicked = true;
      sign = key;
      screen.textContent = sign;
    } else if (secondvariable === "") {
      sign = key;
      screen.textContent = sign;
    } else {
      let result = operate(firstvariable, secondvariable, sign);
      screen.textContent = result;
      firstvariable = result.toString();
      secondvariable = "";
      sign = key;
      screen.textContent = sign;
    }
  }

  else if (key === 'Enter') {
    if (firstvariable === "" || secondvariable === "" || !isOperatorClicked) {
      screen.textContent = 'Error';
      firstvariable = "";
      secondvariable = "";
      isOperatorClicked = false;
      sign = '';
    } else {
      let result = operate(firstvariable, secondvariable, sign);
      screen.textContent = result;
      firstvariable = result.toString();
      secondvariable = "";
      isOperatorClicked = false;
      sign = '';
    }
  }

  else if (key === 'Backspace') {
    if (secondvariable !== "") {
      secondvariable = secondvariable.slice(0, -1);
      screen.textContent = secondvariable || "0";
    } else if (sign !== '') {
      sign = '';
      screen.textContent = firstvariable || "0";
    } else if (firstvariable !== "") {
      firstvariable = firstvariable.slice(0, -1);
      screen.textContent = firstvariable || "0";
    } else {
      screen.textContent = "Calculator For You!!";
    }
  }


  else if (key === 'Escape') {
    firstvariable = "";
    secondvariable = "";
    isOperatorClicked = false;
    sign = '';
    screen.textContent = "Calculator For You!!";
  }
});














