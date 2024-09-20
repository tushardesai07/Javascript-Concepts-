 let emp={
    ename:"vilas",
    eid:123,
    eplace:"mysore"


 }
 console.log(emp);
 console.log(typeof emp);
 console.table(emp);
 console.log(emp.ename)


 let a =new Array(1,2,3,4,5,6,7);
 console.log(a); 

 let b= new Object();
 b.sname="tushar";
 b.sid=123
 console.log(b);


 let emp1={
    ename:"sandesh",
    eid:123,
    eplace:{
        estreet:"desai galli",
        ecity:"gargoty"
    }

 }
   
 console.log(emp1.eplace.epin=50001);
 console.log(emp1.eplace.epin);
 console.log(emp1);


 function emp2(name,id){
    this.name=name;
    this.id=id;
 }

 let e1= new emp2("sudesh",233)
 let e2= new emp2 ("vikas",457)
console.log(e1);
 console.log(e2);
