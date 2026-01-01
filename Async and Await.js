async function gaurav(){
	let delhiweather = new Promise((resolve ,reject)=>{
		setTimeout(() =>{
			resolve("27 Deg celius")
		},2000)
	})

	let Bangloreweather = new Promise((resolve ,reject)=>{
		setTimeout(() =>{
			resolve("21")
		},4000)
	})

	console.log("Fetching Delhi weather Please wait..... ")
	let delhiW =await delhiweather
	console.log("Fetching Delhi weather :"  + delhiW)

	console.log("Fetching banglore weather Please wait.... ")
	let BangloreW =await Bangloreweather
	console.log("Fetching banglore weather :"  + BangloreW)
	return[delhiW ,BangloreW]
}
let a = gaurav()
a.then((value) => {
	console.log(value)
})
