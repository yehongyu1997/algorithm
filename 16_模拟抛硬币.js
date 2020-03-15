// 定义两个累加器，分别记录正反面的次数
var count1=0;
var count2=0;
// 两个占比
var ave1,ave2;
for(var i =1 ;i<=1000000;i++){
    // 通过random方法随机一个（0，1）区间的一个数，再通过round方法进行四舍五入
    // 等于1为正面，等于0为反面
    var n =Math.round(Math.random());
    if (n==1){
        // 正面累加器自加
         count1++;
    }else{
        count2++;
    }
}
ave1=count1/1000000;
ave2=count2/1000000;
console.log('正面的次数为：'+count1,'占比为'+ave1);
console.log('背面的次数为：'+count2,'占比为'+ave2);
