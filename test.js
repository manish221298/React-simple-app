var str1 = "abcdef";
var str2 = "123";
var result = "";
let a=1;
for(let i=0;i<=str1.length;i++){
     result+= str1.slice(0,a)+str2.slice(0,a);
    str1=str1.slice(a);
    str2=str2.slice(a);
    a++;
}
result+=str1+str2;
console.log(result);