var arr  =[8,5,3,6,5,8,4];
// 定义一个结果数组
var resultArr=[];
for(var i=0;i<arr.length;i++){
    // 通过includes方法来判断该元素是否存在新数组中
    if(!resultArr.includes(arr[i])){
        // 若不存在，则把该元素存入新数组
        resultArr.push(arr[i]);
    }
}
console.log(resultArr);
