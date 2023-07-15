let a = () => { 
	 return new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve(456)
		
	},3000)
})
	     }
// baar-baar kisi function ko call krne mai dikkat hoti hai tb hum IIFE function ko call krte hai neeche wale mai slowly work kr raha hai 
// let f = async () =>{
// 	let b = await a
// 	console.log(b)
// 	let c = await a
// 	console.log(c)
// 	let d = await a
// 	console.log(d)
	
// }
// f()

// yaha pr IFEE method apply iss chezz ko easy bna skte hai 
(async () =>{
	let b = await a()
	console.log(b)
	let c = await a()
	console.log(c)
	let d = await a()
	console.log(d)
	
})()
// basically yeh global space ko kam krta hai or block krta hai 



