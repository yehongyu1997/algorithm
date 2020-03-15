// 定义一个数组，存入分数
var arr = [39, 45, 42, 44, 51, 48];
// 最大值为第一个元素
var max = arr[0];
// 最小值也为第一个元素
var min = arr[0];
// 定义一个累加器
var sum = 0;
// 平均分
var ave;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
  // 找到最大值
  if (arr[i] > max) {
    max = arr[i];
  }
  //找到最小值;
  if (arr[i] < min) {
    min = arr[i];
  }
}
// 平均分计算
ave = (sum - min - max) / 4;
// 输出
console.log(ave);
