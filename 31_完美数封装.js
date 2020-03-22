// 封装完美数的函数
function perfect_number(n){
    var sum = 0;
    for (var j = 1; j < n; j++) {
        if (n % j == 0) {
            sum += j;
        }
    }
    if (sum == n ){
        return true;
    }
}
// 通过for循遍历1-10000以内的数字
for (var i =1 ; i<= 10000;i++){
    // 把函数的返回值赋给flag
    var flag = perfect_number(i);
    // 如果返回值是TRUE，就输出该数，即为完美数
    if (flag){
        console.log(i);
        
    }
}