//map()
let arr=[45,23,46]
 let b = arr.map((value,index,array)=>{
  
  console.log(value,index,array)
  
  return value + 1
})
console.log(b)

//filter()
let a=[40,70,60,30,]
let a1= a.filter((value)=>{
  return value > 50
})
console.log(a1)

//reduce()//reduce mai h1=1,h2=2 return karayi value 3 then again nyi value bni h1=3 h2=3 next step mai h1=6 h2=4 thats a process how it done 
let c=[1,2,3,4,5]
let d=c.reduce((h1,h2)=>{
  return h1-h2
})
console.log(d)