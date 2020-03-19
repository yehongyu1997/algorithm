var arr = [1030, 56000, 2030040, 20, 8933, 28001020];
var count = 0;
// 封装一个函数
function calcZero(n) {
    // 接收数字并转成字符串
    count = 0;
    var str = n.toString();
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            count++;
        }
    }
    // 设置一个返回值；
    return count;
}
// 利用冒泡排序
for (var j = 0; j < arr.length; j++) {
    for (var k = 0; k < arr.length - j - 1; k++) {
        if (calcZero(arr[k]) > calcZero(arr[k + 1])) {
            var temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
        }
    }
}
console.log(arr);