
'use strict'
const btnNumber = document.querySelector(".btnNumber");
btnNumber.addEventListener("click", function () {
input.value += parseInt(btnNumber.innerHTML);
}); console.log(btnNumber)

/*const btnPlus = document.querySelector(".btnPlus");
btnPlus.addEventListener("click");
const btnMinus = document.querySelector(".btnMinus");
btnMinus.addEventListener("click");
const btnPoint = document.querySelector(".btnPoint");
btnPoint.addEventListener("click");
const btnMulti = document.querySelector(".btnMulti");
btnMulti.addEventListener("click")
const btnDevide = document.querySelector(".btnDevide");
btnDevide.addEventListener("click");
const btnClear = document.querySelector(".btnClear");
btnClear.addEventListener("click");*/
/*const formGroup = [];
document.getElementsByClassName('btnEqual').addEventListener("click") => 

    document.getElementByClassName('form-group').innerHTML = "=";
;*/
const calcs = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b },
    
}

/*const summation = document.getElementsByClassName(btnNumber).textContent => {
    
}console.log('summation');

const btn = document.querySelector('.btnNumber')
const fn1 = ()=> { console.log ('fn1')};
const fn2 = ()=> { console.log ('fn2')};
btnNumber.addEventListener('click', fn1);
btnNumber.addEventListener('click', fn2);*/

