let request= new XMLHttpRequest()
request.open('get','https://www.meesho.com/')
request.send()
request.onload=()=>{
    console.log(JSON.parse(request.respond))
}