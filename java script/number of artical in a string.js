function vowelCount(str,n)
{
    let c=0;
    for(i=0;i<n;i++)
    {
         if(str[i]==='A' || str[i]==='E' || str[i]==='I' || str[i]==='O' || str[i]==='U') 
       // console.log(str[i]);
        c++;
    }
    return c;
}
let str=prompt("Enter a string: ");
let str1=str.toUpperCase();
console.log(str);
console.log(str1);
let n=str.length
let c=vowelCount(str1,n);
console.log(c);
