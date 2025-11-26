console.log(document.cookie)
document.cookie="name1=gaurav12234"
document.cookie="name2=gaurav12234444"
let key=prompt("enter the key")
let value=prompt("enter the value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
