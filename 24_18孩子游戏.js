var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// 定义两个累加器
var count1 = 1;
var count2 = 0;
for (var i = 0; i < arr.length; i++) {
  count1++;
  // 是3的倍数，删除该元素并且i回退1
  if (count1 % 3 == 0) {
    arr.splice(i, 1);
    i--;
    // count2代表删除元素的个数
    count2++;
    // 当数组长度为1是，输出该数组，并且break
    if (arr.length == 1) {
      console.log("最后的孩子是" + arr[0] + "号");
      break;
    }
  }
  // 进行一圈之后，通过次步骤重新开始下一圈
  if (i == 18 - 1 - count2) {
    i = -1;
  }
}
