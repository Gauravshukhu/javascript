let a = {
	
name2:"gaurav",
langauge: "JavaScript",
		run : () => {
		alert(" self run")
	
}
console.log(a)


let p ={
	run : () => {
		alert("run")
		
	}
}

p.__proto__ ={
	name:"rahul"
}
a.__proto__ = p
a.run()
console.log(a.name)