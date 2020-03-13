var sum=0;
for(var i=1;i<=9;i++){
    var k='';
    for (var j=1;j<=i;j++){
        k+='2'
    }
    sum+=Number(k);
}
console.log(sum);
