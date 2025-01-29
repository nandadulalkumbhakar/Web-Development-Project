let str=input("Enter a string:  ");
let len=str.length;
let i,c=0;
str=toLowerCase(str);
for(i=0 ; i<len;i++)
{
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' )
    c++;
}
console.log(c);