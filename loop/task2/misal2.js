let arr = [1, 2, 5, 7, 10, 26, 44, 78];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 1) {
    sum = sum + arr[i];
  }
}
console.log(sum);
