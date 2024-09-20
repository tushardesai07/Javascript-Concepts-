sessionStorage.setItem("name","tushar")
sessionStorage.setItem("place","kolhapur")
sessionStorage.removeItem("name")
sessionStorage.clear

let name=sessionStorage.getItem("name")
let place=sessionStorage.getItem("place")
document.write(`my namw is ${name} and place ${place}`)