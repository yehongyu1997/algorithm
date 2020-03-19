var arr = [1,2,4,-3,2,3,1,-4,-2,2,4,-5];

for (var i=0;i<arr.length-2;i++){
   var sum =0;
   sum=arr[i]+arr[i+1]+arr[i+2];
   if(sum==0){
       console.log(arr[i],arr[i+1],arr[i+2]);
   }
}