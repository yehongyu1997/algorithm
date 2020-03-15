var n = 2;
for (var i = 2; i < 45887; i++) {
  if (45887 % i == 0) {
    n += 1;
  }
}
if (n == 2) {
  console.log("45887是质数");
} else {
  console.log("45887不是质数");
}
