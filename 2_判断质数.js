for (var i = 2; i <= 100; i++) {
    // 因数个数n=0放在第一个for循环里来来重置每个数的起始因数个数为0
  var n = 0;
  for (var j = 1; j <= 100; j++) {
    //  条件式为是否整除
    // 若整除，则说明j是i的一个因数
    // 则n自加1
    if (i % j == 0) {
      n += 1;
    }
  }
//   通过因数个数为2来确定该数为质数
  if (n == 2) {
    console.log(i);
  }
}
