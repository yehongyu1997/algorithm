var arr1 = [1, 3, 8, 10, 12];
var arr2 = [4, 2, 10, 1, 3, 9, 17, 3];
// 定义一个结果数组来存放交集
var result_arr = [];
for (var i = 0; i < arr1.length; i++) {
    // 若数组1的元素存在与数组2中
    if (arr2.includes(arr1[i])) {
        则把数组1中的该元素存进结果数组中
        result_arr.push(arr1[i]);
    }
}
console.log(result_arr);
