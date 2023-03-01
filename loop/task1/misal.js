let n = prompt("n eded daxil edin ");
let m = prompt("m eded daxil edin ");
let count = 0;
if (n > m) {
  for (let i = m; i < n; i++) {
    if (i % 2 == 1) {
      count++;
    }
  }
} else {
  alert("n boyuk olmalidi");
}
console.log(count);
