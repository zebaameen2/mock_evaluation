let nums = [10, 3, 7, 20, 13, 2];
let squares = nums.map(n => n * n);
console.log(squares);

let primes = nums.filter(n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
});
console.log(primes);
let sum= nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 

let sortedNums = nums.sort((a, b) => b - a);
console.log(sortedNums);
