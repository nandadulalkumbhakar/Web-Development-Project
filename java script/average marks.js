let n=parseInt(prompt("Enter the size of an array"));
let a=[n];
for (let i=0;i<n;i++)
{
    a[i]=parseInt(prompt("Enter a no"));
}
let sum=0;
for (let i=0;i<n;i++)
{
     sum =sum + a[i];
}
let avg=(sum/n);
console.log(avg);