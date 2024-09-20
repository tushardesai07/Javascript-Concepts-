function load() {
    let request=new XMLHttpRequest();
    request.onreadystatechange()=>{
        document.getElementById('p1').innerHTML =request.responcetext.
    }
console.log(request);
request.open('GET','./index.txt')
request.send()
}