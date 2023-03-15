let key =prompt("enter the key")
let value=prompt("enter the value")
localStorage.setItem(key, value)
localStorage.getItem(`the value at ${key} and ${value}`)

if (key == 0) {
	localStorage.clear()
}