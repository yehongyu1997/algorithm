var arr = [1, 5, 7, 9, 11,33,22];
var max = arr[0];
for (var i = 1; i < arr.length; i++){
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
