// function add(a,b)//Formal parameter
// {
//     console.log(a+b);
// }
// add(2,9);//Actual parameter//11
// add(2,"5")//25
// add(2,null)//2
// add(2,'4');//24
// add(2,5.8);//7.8


// function add(a,b)
// {
//     return a+b;
// }
// let a=add(2,6);
// console.log(a);//8

// function name(name1)
// {
//     if(!name1)
//         return "please enter valid name";
//     return `${name1}`;
// }
// console.log(name("nanda"));
// console.log(name());


function name(name1="Ram")
{
    if(!name1)
        return "please enter valid name";
    return `${name1}`;
}
// console.log(name("nanda"));
// console.log(name());//if we doesn't pass any name then bydefault its print "Ram" otherwise its overwrite


function number(...a)
{
    return a;
}    
console.log(number(1,2,3,4,5,6,7,89));
