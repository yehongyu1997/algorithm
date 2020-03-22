// 再次重新书写以下案例，要求封装必要的函数，不能直接抄原来的写法，必须想想可以将什么逻辑单独封装为函数：寻找所有水仙花数、寻找10000以内的完美数。
// 体会封装函数的函数：代码量可能更多了，但是思路更清晰了。
// (Math.pow(bw,3)+Math.pow(sw,3)+Math.pow(gw,3)) ==num)

// 自己封装的一个函数
function  findshuixh(n){
    var gw=n%10;
    var sw=parseInt((n/10)%10);
    var bw= Math.floor(n/100);
    if ((Math.pow(bw,3)+Math.pow(sw,3)+Math.pow(gw,3))==n){
            return true;
    }else{
        return false;
    }
}
// 通过for循环来输出10000以内的水仙花数
for( var i = 0 ;i<=10000;i++){
    // 调用函数，并把结果赋给flag
    var flag=findshuixh(i);
    // 如果flag是真，则输出该数，即为水仙花数
    if (flag){
        console.log(i);
    }
}
