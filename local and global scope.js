//block and function is local scope 
function ax(){
	{ let a = 9
	 console.log(a)
 }
}

ax()
//global scope
let p = 8
function ax(){
	{ let a = 9
	 console.log(a)
	 console.log(p)
 }
}

ax()