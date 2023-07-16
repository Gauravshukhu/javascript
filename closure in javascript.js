function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
   name ="gaurav"
  displayName();
}
init()

// mested fn also makes closure 
function returnfun() {
 const x = ()=> {
	 let a =1
	 console.log(a)
	 const y = ()=> {
		 // let a = 2
		 console.log(a)
		 const z =()=> {
			 // let a =3
			 console.log(a)
		 }
		 	  a = 999
		 z()
	 }
	 
	 y()
	
	
 }

return x
}
let a = returnfun()
a()

