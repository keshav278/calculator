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
     {  let num = a/b;
         return num.toFixed(2);}
      
}
function operate(a,op,b){
      switch(op){
          case '+':return add(a,b);
                   break;
          case '-':return sub(a,b);
                   break;
          case 'X':return mult(a,b);
                   break;
          case '/':return div(a,b);
                    break;
          default:break;            

      }
}

const equal = document.querySelector('.result');
const nums=document.querySelectorAll('.num');
const display=document.querySelector('.display');
const clear=document.querySelector('.clear');
const addbtn = document.querySelector('.add');
const subbtn = document.querySelector('.subt');
const divbtn = document.querySelector('.divide');
const mulbtn = document.querySelector('.mult');
const dotbtn = document.querySelector('.dot');
let calculate=[];
nums.forEach((num)=>{
   num.addEventListener('click',()=>{
       display.value+=`${num.value}`;
     
      });
});

equal.addEventListener('click',()=>{
    ans=calculate[0];
    if(calculate.length===0)
    {}
    else
     {
        calculate.push(Number(display.value));
        let ans = operate(calculate[0],calculate[1],calculate[2]); 
        console.log(calculate);
        calculate.splice(0,3,ans);
        display.value=ans;
        calculate.length=0;
     }
     console.log(calculate);
    
    
   

});
clear.addEventListener('click',()=>{
    display.value='';
    while(calculate.length){
        calculate.pop();
    }

   
});

function load(button){
    if(calculate.length===0){
        calculate.push(Number(display.value));
        calculate.push(button.value);
        display.value='';
        console.log(calculate);
    }
   
    else{
        calculate.push(Number(display.value));
        calculate.push(button.value);
        let ans = operate(calculate[0],calculate[1],calculate[2]);
        calculate.splice(0,3,ans);
        display.value=ans;
        calculate.length=0;
       
    }
    
    console.log(calculate);

     
      
    
}
addbtn.addEventListener('click',function(){
    load(addbtn);
});
subbtn.addEventListener('click',function(){
    load(subbtn);
});
divbtn.addEventListener('click',function(){
    load(divbtn);
});
mulbtn.addEventListener('click',function(){
    load(mulbtn);
});
dotbtn.addEventListener('click',function(){
    display.value+='.';
});

