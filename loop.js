//for loop
for(i=0; i<20; ++i){
  console.log(i+1)
}

//for in loop
let obj= {
  harry:20,
  gaurav:35,
  suranjh:45,
  
}
for(let a in obj){
  console.log("Marks of " + a + " are " + obj[a])
}

//for of loop 
for(let b of "gaurav"){
  console.log(b)
}