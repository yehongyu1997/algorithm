var arr = [6, 10, 12, 14, 88, 81, 100, 56];
var flag = true;
for (var i = 0; i <arr.length; i++) {
  if (arr[i] % 2 == 0) {
     flag = false;
     break;
  } 
}
if(true){
  console.log('该数组均为偶数');
}else{
  console.log('该数组不均为偶数');
}
