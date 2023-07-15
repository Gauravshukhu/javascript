
//desstructing assignment
let arr = [3, 5,7,8,9,10,11]

// let [a,b,c,d,e, ...rest] = arr
// console.log(a,b,c,d,e, rest)

//  let [a, ...rest] = arr
// console.log(a, rest)

let {a ,b} = { a:1 , b:8}
console.log(a,b)

//spread Operator
let arr1 = [3,5,7]
let obj1 = {...arr1}
console.log(obj1)

// it is genrally use in react.js
let obj2 = {
	name: "gaurav",
	company: "vxc",
        
}
// console.log({...obj2, name:"rahul"})  :- in this case override is happen value is change 
console.log({ name:"rahul",...obj2}) // in this print the value without changing the value 