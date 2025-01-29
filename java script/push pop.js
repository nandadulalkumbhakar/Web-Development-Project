// let a=[100];
// for(let i=0;i<5;i++)
// {
//     a[i]=parseInt(prompt("Enter ",i+1,"no"))
// }
// console.log(a);
// //a.push(100);
// console.log(a);
list=[1,2,3,4,5];
console.log(list);//1,2,3,4,5
list.push(6);
console.log(list);//1,2,3,4,5,6
list.pop()
list.pop()
console.log(list);//1,2,3,4
list.toString();
console.log(list);//1,2,3,4
let list1=[1,2,3,4,5,6,7];
console.log(list1);//1,2,3,4,5,6,7
let list2=[8,9];
console.log(list2);//8,9
newlist=list1.concat(list2);
console.log(newlist);//1,2,3,4,5,6,7,8,9
list.unshift(0);
console.log(list);//0,1,2,3,4
let delFirst=list1.shift();
console.log(delFirst);//1
console.log(list1.slice(1,3));
let a=[11,22,33,44,55];
console.log(a);
console.log(a.slice(1,3));//22,33//original value does not change
console.log(a);
console.log(a.splice(1,2,100,200));
console.log(a)
console.log(a.splice(1,3));//starting index,how many element delete,replace any no  // original array change
