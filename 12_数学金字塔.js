// 起始字符串为1
var str1 = '1';
// 从2到7一共有6行
for (var i = 2; i <= 7; i++) {
    //  str = ' '放在这里来重置每一次循环前的空格数量
  str = ' ';
//   通过for循环来确定每一行字符串前的空格数量
  for (var j = 1; j <= 7- i; j++) {
    str += ' ';
  }
//   空格加上字符串
 var  str2 = str + str1;
//  输出
  console.log(str2);
  str1 = i + str1 + i;
}
