let p1=new Promise((resolve ,reject) => {
	setTimeout(() => {
		// resolve("value 1")
		reject( new Error("error"));
	},2000);
	
});
let p2=new Promise((resolve ,reject) => {
	setTimeout(() => {
		resolve("value 2")
	},3000);
	
});
let p3=new Promise((resolve ,reject) => {
	setTimeout(() => {
		resolve("value 3")
	},4000);
	
});
// p1.then((value) => {
// 	console.log(value)
	
// })
// p2.then((value) => {
// 	console.log(value)
	
// })
// p3.then((value) => {
// 	console.log(value)
	
// })

//agar mujhe yaha pr three promise ko ek sath chlna hai toh hum yaha pr hum all promise use krenge jo ki hume ek sath chlane mai help kregi
// let promise_all = Promise.all([p1, p2 ,p3])
//   promise_all.then((value) => {
// 	  console.log(value)
	  
//   })

//if somehow p1 reject then  case of promise all error will shown but promise will not work and run.in this case we use allsettled.
// let promise_all = Promise.allSettled([p1, p2 ,p3])
//   promise_all.then((value) => {
// 	  console.log(value)
	  
//   })

//promise.race jo sbse reslove hogi ushko console mai daal dega 
// let promise_all = Promise.race([p1, p2 ,p3])
//   promise_all.then((value) => {
// 	  console.log(value)
	  
//   })
//promise.any
let promise_all = Promise.any([p1, p2 ,p3])
  promise_all.then((value) => {
	  console.log(value)
	  
  })