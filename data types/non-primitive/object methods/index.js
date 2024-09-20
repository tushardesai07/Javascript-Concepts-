//call ,apply ,bind  *HM


let stu={
    sname:"varun",
    sid:123,
    splace:"maysore"

}

Object.freeze(stu)
//object.seal(stu)
   stu.sname="dhananjay"
   stu.spin=5600001

   console.log(stu);
   console.log(Object.keys(stu));
   console.log(object.values(stu));
   console.log(object.entries(stu));
