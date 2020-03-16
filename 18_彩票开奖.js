var arr = [];
while (arr.length < 6) {
  // 生成随机数
  var n = parseInt(Math.random() * 33 + 1);
  // 通过includes方法来判断数字n是否存在数组中
  if (!arr.includes(n)) {
    // 若不存在，则存入
    arr.push(n);
  }
}
console.log(arr);
