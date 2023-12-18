const num=document.getElementById("gg")
const increment=document.getElementById("plus")
const decrement=document.getElementById("minus")
function add(){
  const current= num.innerText
  num.innerText=parseInt(current)+1
}                     
function sub(){
  const current= num.innerText
  num.innerText=parseInt(current)-1
}
increment.addEventListener("click",add)
decrement.addEventListener("click",sub)