// f(n) = n! = n.(n-1)...3.2.1
// f(n) = n.f(n-1)
// f(0) = 1
function recursiveFactorial(n) {
  if (n === 0) return 1;
  return (n * recursiveFactorial(n - 1))
}

function iteractiveFactorial(n) {
  factorial = 1;
  // if n === 0  this for loop will not be executed and the return value will be 1, as expected for f(0)
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

f = iteractiveFactorial(5);
f2 = recursiveFactorial(5);

console.log(f);
console.log(f2);
