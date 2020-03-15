var sum=0;
for(var i=1;i<=9;i++){
    // 暂时想不到别的办法，只能用字符串叠加通过number函数转成数字
    var k='';
    for (var j=1;j<=i;j++){
        k+='2';
    }
    sum+=Number(k);
}
console.log(sum);
