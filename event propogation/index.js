let grandparent =document.getElementById('grandparent');
grandparent.addEventListener('click',()=>{
    grandparent.style.background='red'
    console.log("grandparent clicked");
})

let parent =document.getElementById('parent');
parent.addEventListener('click',()=>{
    parent.style.background='yello'
    console.log("parent clicked");
})

let child=document.getElementById('child');
child.addEventListener('click',()=>{
   child.style.background='green'
    console.log("child clicked");})
