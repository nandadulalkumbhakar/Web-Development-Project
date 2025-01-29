let n=parseInt(prompt("Enter the sizeof a array"));
let a=[n];
for(i=0;i<n;i++)
a[i]=prompt("Enter the name of the company: ");
console.log(a);
let newStr=a.shift();
console.log(a);
for(i=0;i<a.length;i++)
{
    if(a[i]=="Uber")
    a.splice(i,1,"Ola");
}
console.log(a);
a.push("Amazon");
console.log(a);