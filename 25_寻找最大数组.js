// -2,2,-3,4,-1,2,1,-5
// 1,2,3,4
// -5,6,-2,-3,4
// 给定一个数组
var arr = [-2,2,-3,4,-1,2,1,-5];
// 最大值之和
var max_sum = -2;
// 元素相加之和
var arrsum = 0;
// 累加器
var count = 0;
// 计算数组的最大值之和，对数组中的每个数进行遍历
for (var i = 0; i < arr.length; i++) {
  // 对以每个元素为起点的最大值
  for (var j = i; j < arr.length; j++) {
    for (var k = i; k <= j; k++) {
      arrsum += arr[k];
      //   如果元素相加之和大于最大值，则把 arrsum 赋给 max_sum
      if (arrsum > max_sum) {
        max_sum = arrsum;
        count++;
        // n表示从以arr[n]为起点的子数组相加才能取得最大值
        var n = i;
      }
    }
    // 进行下一圈，元素相加和置0
    arrsum = 0;
  }
}
// 这里的count表示从arr[n]开始加了几个元素
count = count - n;
// 定义一个空数组来存结果数组
var arr1 = [];
// 把从数组下标从n开始的元素到n+count的元素存入数组中
for (var i = n; i < n + count; i++) {
  arr1.push(arr[i]);
}
// 输出
console.log("最大连续子数组之和是" + max_sum);
console.log(arr1);
