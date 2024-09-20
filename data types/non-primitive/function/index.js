  //ananormous function

  //function ()
  //{
    //console.log( "hello");
  //}
  //()


  //named function

  function add(a,b){

    console.log(`${a+b}`);

  }
  add(10,20);


  //immediate  invoke function

  (
    function (a,b){
        console.log(`${a-b}`);
    }
    (100,20)
  )

  //function with expression
  const mul=function (a,b){

    console.log(`${a*b}`);
  }
  mul(2,6)


  //arrow function

 const div=(a,b)=>{
    console.log(`${a/b}`);

  }
  div(5,10)