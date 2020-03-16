var fs = require('fs');
var content = fs.readFileSync('./考试成绩.txt');
// 必须加toString，这样才能变为字符串。否则就是二进制数据。
var str = content.toString();
// 所有数据被读取到了一个字符串中，现在要按换行符拆为数组。
var arr = str.split('\r\n');
var chn_count=0;
var math_count=0;
var eng_count=0;
for (var i=0;i<arr.length;i++){
    var item =arr[i];
    // 按空格拆
    var arr1 =item.split(' ');
    if(arr1[3]>=60){
        chn_count++;
    }
    if(arr1[5]>=60){
        math_count++;
    }
    if(arr1[7]>=60){
        eng_count++;
    }
}
console.log('语文及格率'+(chn_count/20000));
console.log('数学及格率'+(math_count/20000));
console.log('英语及格率'+(eng_count/20000));

