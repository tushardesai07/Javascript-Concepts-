let dark =document.getElementById('btn1')
dark.addEventListener('click',()=>{
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
})

console.log(dark);

let light=document.getElementById('btn2')
light.addEventListener('dblclick',()=>{
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
})
console.log(light);