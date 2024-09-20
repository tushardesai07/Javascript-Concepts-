localStorage.setItem("name","Tushar")
localStorage.setItem("place","Kolhapur")
localStorage.removeItem("name")
localStorage.clear()/

let name=localStorage.getItem("name")
let place = localStorage.getItem("place")
document.write(`my name is ${name} and place is ${place}`)