// f(n) = n! = n.(n-1)...3.2.1
// f(n) = n.f(n-1)
// f(0) = 1
function recursiveFactorial(n) { //O(n)
  if (n === 0) return 1;
  return (n * recursiveFactorial(n - 1))
}

function iteractiveFactorial(n) { //O(n)
  factorial = 1;
  // if n === 0  this for loop will not be executed and the return value will be 1, as expected for f(0)
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

// Stirling aproximation n! ~ sqrt(2*pi*n)*((n/e)**n)
function mathematicalFactorial(n) { //O(log(n)) but it's less precise
  const c1 = Math.sqrt(2*Math.PI*n);
  const c2 = (n/Math.E)**n;
  return c1*c2;
}


n=100
f0 = mathematicalFactorial(n);
f1 = iteractiveFactorial(n);
f2 = recursiveFactorial(n);

console.log(f0)
console.log(f1);
console.log(f2);
