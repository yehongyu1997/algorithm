var readline = require('readline');
	
//创建readline接口实例
var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// question方法
rl.question("请输入参数n:",function(n){
    var sum = 1;

for (var i = 1; i <= n; i++) {
    var k=1;
  for (var j = 1; j <= i; j++) {
    k *= j/ (2 * j + 1);
  }
    sum += k;
}
console.log(2*sum);
}
)
