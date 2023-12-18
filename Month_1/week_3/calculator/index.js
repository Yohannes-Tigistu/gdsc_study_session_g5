const firstnum=document.getElementById("num1");
const secondnum=document.getElementById("num2");
const result=document.getElementById("result");
const addition=document.getElementById("add");
const subtract=document.getElementById("sub");
const multiplication=document.getElementById("multi");
const division=document.getElementById("div");

function add(){
  const num1=firstnum.innerText;
  const num2=secondnum.innerText;
  result.innerText=(parseInt(num1) ) + (parseInt(num2));
}
function sub(){
  result.innerText=(firstnum.innerText-secondnum.innerText);
}
function multi(){
  result.innerText=(firstnum.innerText*secondnum.innerText);
}
function divide(){
  result.innerText=(firstnum.innerText/secondnum.innerText);
}
addition.addEventListener("click",add);
