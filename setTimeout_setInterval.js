document.write("hello")


const sum = (a, b) => {
  console.log("setTimerout is running " + (a,b));
  a + b
  
}
setTimeout(sum,1000, 1,2 )

 let a=setTimeout(function() {
  alert("i am inside the setTimeout")
  
},2000)
let b= prompt("do you wnat setTimeout?")
if("n"==b){
clearTimeout(a)
}
console.log(a)
  
