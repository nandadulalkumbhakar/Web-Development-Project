let arr=[],arr1=[];
let n = parseInt(prompt("Enter the size of an array"));
// console.log("Enter the element of an array:  ")
for(let i=0;i<n;i++)
arr[i] = parseInt(prompt("Enter the element: "));
console.log(arr);
for(let i=0;i<n;i++)
{
    arr1[i]=arr[i]**2;
}
console.log(arr1);