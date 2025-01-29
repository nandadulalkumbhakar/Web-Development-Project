//In js array is an object, the element of an array may be similar type or may not be similar type,we can increace or decreace the size of an array  
let arr=[10,20,30,40,'Nanda',true];
//console.log(arr);
let arr1=[];
for(i=0;i<5;i++)
{
    arr1.push(i);//insert last
}
// console.log(arr1);
// console.log(arr1.length);
let arr2=arr.concat(arr1);
// console.log(arr2);
//console.log(arr.indexOf('Nanda'));//if present then return index number otherwise return -1
//arr.pop();
//console.log(arr);
//arr.reverse();
//console.log(arr);
arr.unshift(8);
//console.log(arr);//insert first
arr.shift();
//console.log(arr);//remove first
//console.log(arr.includes(30));//check its present or not


let arr3=arr.slice(1,4);
console.log(arr3);
console.log(arr);

let arr4=arr.splice(1,4);
console.log(arr4);
console.log(arr);

//diff between slice and splice
// 1)both are use to create sub string or sub array
// 2)in case of slice last index is not include but in case of splice last index is include,
// 3)in case of slice the original is not change but in case of splice selection part remove from origianl string or sub array






