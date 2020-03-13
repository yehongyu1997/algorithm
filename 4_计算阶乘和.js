// 题目： 计算1到9的阶乘之和
var sum = 0;
for (var i = 1; i <= 9; i++) {
  var k = 1;
//   计算每个数的阶乘
  for (var j = 1; j <= i; j++) {
    k = k * j;
  } 
  sum += k;
}
console.log(sum);
