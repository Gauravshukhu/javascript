class Animal{
	constructor(name){
		this._name = name 
	}
	fly(){
		console.log("mai ud raha hu")
	}
	get name(){
		return this._name
	}
	set name(newName){
		this._name = newName
	}

	class Rabbit extends Animal{
		eatCarrot() {
		console.log("earting Carrot")
		
		}
	}

	
		
		
	
	
		
}
let a = new Rabbit("doody")
a.fly()
console.log(a.name)
a.name = "motni"
console.log(a.name)
//instance of operator
let c = 67
console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)