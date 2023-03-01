let  x = function(e){
  alert("hello world 1")
}

let y =function(e){
  alert("hello world 2")
}  

btn.addEventListener('click' , x)

btn.addEventListener('click' , y)

 let a= prompt("what is  your favourite no");

if(a == 2){
  btn.removeEventListner('click' , x)
}