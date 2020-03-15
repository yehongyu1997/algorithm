var count1=0;
var count2=0;
var ave1,ave2;
for(var i =1 ;i<=1000000;i++){
    var n =Math.round(Math.random());
    if (n==1){
         count1++;
    }else{
        count2++;
    }
}
ave1=count1/1000000;
ave2=count2/1000000;
console.log('正面的次数为：'+count1,'占比为'+ave1);
console.log('背面的次数为：'+count2,'占比为'+ave2);
