// a function that return the index value of a Fibonacci sequence

// Fibonacci sequence 0,1,1,2,3,5,8...
// respective index   0,1,2,3,4,5,6...

// f(n) = f(n-1) + f(n-2)
// f(1) = 1
// f(0) = 1
function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return (recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2))
}

function iteractiveFibonacci(n) {
  let fibonacciSequence = [0,1]
  for (let i = 2; i <= n; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }
  return fibonacciSequence[n];
}

f = iteractiveFibonacci(6);
f2 = recursiveFibonacci(6);

console.log(f);
console.log(f2);
