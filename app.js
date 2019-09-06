const submitBtn = document.querySelector('.submitBtn');


submitBtn.addEventListener('click', calculate);

function calculate() {

  const input_1 = document.querySelector('.input_1');
  const input_2 = document.querySelector('.input_2'); 
  const result_h1 = document.querySelector('.result_h1');
  const operator = document.getElementById('operator');

  let num1 = parseFloat(input_1.value);
  let num2 = parseFloat(input_2.value);
  let result;
  

  switch(operator.value) {
    case "add":
      result = num1+num2;
      result_h1.style.display = 'block';
      result_h1.innerHTML = result;
      break;
    case "sub":
      result = num1-num2;
      result_h1.style.display = 'block';
      result_h1.innerHTML = result; 
      break;
    case "mul":
      result = num1*num2;
      result_h1.style.display = 'block';
      result_h1.innerHTML = result;  
      break;
    case "div":
      result = num1/num2;
      result_h1.style.display = 'block';
      result_h1.innerHTML = result; 
      break;              
  }
 
}


