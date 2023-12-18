function paritycheck(bound){
  let oddNumList=[];
  let index=0;
  for(let i=1;i<bound;i++){
     if((i%2!=0)){
      oddNumList[index]=i;
      index++;
    }
  } 
  return  oddNumList;
}
  const upperbound = prompt("please enter the number");
  const list =paritycheck(upperbound);
  alert("The odd numbers are:"+list);