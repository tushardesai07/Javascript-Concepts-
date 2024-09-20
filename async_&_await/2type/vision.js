async function x(){
    let data =await fetch ('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log(data);
    let finaldata =await data.json()
    console.log(finaldata);
    let Result = finaldata.categories
    console.log(Result);
    Result.map((item) =>{
        let section=document.querySelector('section')
        section.innerHTML +=`<div>
        <img src=${item.strCategoryThumb}>
        <p>${item.strCategory}</p>
        <p>${item.strCategoryDescription}</p>
        </div>`
    })
}
x()