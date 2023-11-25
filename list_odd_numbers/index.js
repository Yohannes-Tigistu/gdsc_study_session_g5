function factorial(bound){
  let count=0;
  let array=[];
  for(let i=1;i<bound;i++){
     if((i%2!=0)){
      array[count]=i;
      count++;
     }
  }
 return array;
} 
  const upperbound = prompt("please enter the number");
  const value = factorial(upperbound);
  alert("The odd numbers are:"+value);