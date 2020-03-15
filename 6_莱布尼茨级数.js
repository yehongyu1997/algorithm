var readline = require("readline");

//创建readline接口实例
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// question方法
rl.question("请输入参数n:", function(n) {
  var sum = 1;

  for (var i = 1; i <= n; i++) {
    // 设k为1来重置
    var k = 1;
    // 通过for循环算出每个式子值
    for (var j = 1; j <= i; j++) {
      k *= j / (2 * j + 1);
    }
    //   sum求和，我的sum是指作业等式右面的部分
    sum += k;
  }
  // 顾再此输出π值时需×2
  console.log("π值为：" + 2 * sum);
});
