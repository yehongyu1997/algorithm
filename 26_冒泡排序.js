var arr = [ 33,21,65,14,2,89,];
for ( var i=0;i<arr.length-1;i++){
    for (var j =0 ;j<arr.length-i-1;j++){
        // 算法核心
        if (arr[j]>arr[j+1]){
            var temp =arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);
