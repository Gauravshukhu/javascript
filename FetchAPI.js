let p =fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
	console.log(response.status)
	console.log(response.ok)
	// console.log(response.text)
	// console.log(response.fromData)
	return response.json()
	}).then((response2 )=>{
	console.log(response2)
	
	
	})