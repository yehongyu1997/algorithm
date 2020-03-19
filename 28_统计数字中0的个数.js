var count=0;
function calcZero(n){
    // 接收数字并转成字符串
    var str = n.toString();
    for (var i=0;i<str.length;i++){
        if(str[i]==0){
            count++;
        }
    }
    console.log('数字'+n+'中0的个数是'+count+'个0');
}
calcZero(333333);