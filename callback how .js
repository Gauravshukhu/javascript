//synchronous 
// let a=prompt("what is your name?");
// let b=prompt("what is your age ?");
// let c=prompt("what is your goal?");
// console.log(a  + "is " +  b + "year old has " + c +"favourite color");

//Asynchronous 
// setTimeout( function()  {
//   console.log("hello i am good ");
// }, 4000)

//callback function
function loadScript(src ,callback) {
  var script = document.createElement("script");
  script.src= src;
  script.onload = function() {
    console.log("Loaded with SRC: " + src)
    callback(src);
  }
  document.body.appendChild(script);
}

function  hello(src){
  alert('hello my world' + src);
}
 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ,hello)
            
  