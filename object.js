//in js object is a keyValue pair,we can access the using key and object name

// let sym=Symbol("star");
// console.log(sym);


let obj={
    name: "Nanda Dulal Kumbhakar",
    roll:10800122147,
    dept:"CSE",
};

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["roll"]);
// console.log(obj["dept"]);
 
console.log(obj);

Object.freeze(obj);//after freeze we can't modified the object

obj.name="nanda";

console.log(obj);




