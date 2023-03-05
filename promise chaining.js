let p1= new Promise((resolve,reject) =>{
      setTimeout(() =>{
	      console.log("i am god")
	      resolve(56)
		     },2000)
	})

p1.then((value) =>{
	console.log(value)
	let p2= new Promise((resolve, reject) =>{
		setTimeout(() =>{
			resolve("promise p2")
		},2000)
	}).then((value) =>{
		console.log(value)
	})
})