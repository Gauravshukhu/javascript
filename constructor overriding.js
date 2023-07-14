class Employee{
	constructor(name){
		console.log(` ${name} Employe constructor is here`)
		this.name=name
	}
	login(){
	console.log(`Employee has been loged in`);	
	}
	logout(){
		console.log(`Employee has been loged out`);
		
	}
	requestLeaves(leaves){
		console.log(`Employee wants ${leaves} leaves`)
		
	}
}
class Programmer extends Employee{
	constructor(name){
		super(name)
		console.log("this is newly constructor")}
	//agar hum parent mai constructor banate hai toh automatically child mai constructor bn jata hai
 requestCoffee(){
	 console.log(`Employee has requested ${4} coffee`)
 }	
		requestLeaves(leaves){
			super.requestLeaves(4)
			console.log("one extra is granteed")
		
		//console.log(`Employee wants ${leaves + 1} leaves (one extra)`)
		}
}
let e = new Programmer ("gaurav")
e.login()
e.requestLeaves(3)
e.requestCoffee()