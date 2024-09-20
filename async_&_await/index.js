async function x() {
    let data =await fetch ('https://fakestoreapi.com/products')
    console.log(data);
    let Finaldata = await  data.json()
    console.log(Finaldata);
    Finaldata.map((item)=>{
        let body =document.body
        let section =document.createElement('section')
        section.innerHTML +=`<div> 
        <img src=${item.image} height="200px" width="200px">
        <p>${item.title}</p>
        <p>${item.description}</p>
        <p>${item.rating.rate}</p>
        <button>Add Cart</button>
        
        </div>`
        body.appendChild(section)
    })
    
}
x()