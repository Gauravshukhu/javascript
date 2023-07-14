class Animal{
	constructor(name) {
	this.name = Animal.capitalize(name)
	}
	walk(){
		console.log(" animal " + this.name + " is walking ")
	}
	//static method
	static capitalize(name){
		return name.charAt(0).toUpperCase()+ name.substr(1, name.length)
	}
}
 j = new Animal("jack")
j.walk()