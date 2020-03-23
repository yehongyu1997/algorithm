//  各国治愈数  按治愈人数多少排序
// 切记，对象不能排序，一定要转成数组
// 关键在于怎么转成数组
var obj = {
  意大利: 4400,
  美国: 1107,
  德国: 115,
  法国: 1300
};
var arr = [];
for (var k in obj) {
  arr.push({ country: k, 人数: obj[k] });
}
// console.log(arr);
arr.sort(function(a, b) {
  return b.人数 - a.人数;
});
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
  console.log(`第${i + 1}名${arr[i].country}治愈了${arr[i].人数}人`);
}
