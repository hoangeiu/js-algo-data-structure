// Add 1
function addUpTo1(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
console.log(addUpTo1(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Add 2
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

t1 = performance.now();
console.log(addUpTo2(1000000000));
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
