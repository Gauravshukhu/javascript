class Employee{
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
 requestCoffee(){
	 console.log(`Employee has requested ${x} coffee`)
 }	
		requestLeaves(leaves){
			super.requestLeaves(4)
			console.log("one extra is granteed")
		
		//console.log(`Employee wants ${leaves + 1} leaves (one extra)`)
		}
}
let e = new Programmer ()
e.login()
e.requestLeaves(3)	