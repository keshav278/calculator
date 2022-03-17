function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    if(b===0)
     return "OOPS";
     else
      return a/b;
}
const nums=document.querySelectorAll('.num');
const display=document.querySelector('.display');
const clear=document.querySelector('.clear');
nums.forEach((num)=>{
   num.addEventListener('click',()=>{
      display.value+=`${num.value}`;
      });
});
const equal = document.querySelector('.result');
equal.addEventListener('click',()=>{
    console.log(Number(display.value));
});
clear.addEventListener('click',()=>{
    display.value='';
});
    
