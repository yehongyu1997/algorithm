// 判断该数组是否为对称
var count = 0;
var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
for (var i = 0; i < arr.length; i++) {
    // 判断与之对应位置的元素是否相等
  if (arr[i] == arr[arr.length - 1 - i]) {
    if (i <= arr.length / 2) {
      console.log( "第" + (i + 1) + "个元素是与第" + (arr.length - i) + "个元素相等的" );
      count++;
    } else {
        // i超过数组的中间位置就跳出循环，没必要接着判断了
      break;
    }
  }else{
      console.log('该数组不是对称数组'); 
  }
}
if (count == Math.ceil(arr.length / 2)) {
  console.log("该数组是对称数组");
}
