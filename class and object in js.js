class RailwayForm{
	submit(){
		alert( this.name+": This form is submitted")
	}
	cancel(){
		alert(this.name+" : This form is cancelled")
	}
	fill(givenname){
		this.name= givenname
	}
	
	
}
let harryForm = new RailwayForm()
harryForm.fill("harry")
let gauravForm = new RailwayForm()
gauravForm.fill("gaurav")
harryForm.submit()
gauravForm.cancel()
harryForm.cancel()