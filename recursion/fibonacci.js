// a function that return the index value of a Fibonacci sequence

// Fibonacci sequence 0,1,1,2,3,5,8...
// respective index   0,1,2,3,4,5,6...

// f(n) = f(n-1) + f(n-2)
// f(1) = 1
// f(0) = 1
function recursiveFibonacci(n) { //O(n)
  if (n === 0) return 0;
  if (n === 1) return 1;
  return (recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2))
}

function iteractiveFibonacci(n) { //O(2**n)
  let fibonacciSequence = [0,1]
  for (let i = 2; i <= n; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }
  return fibonacciSequence[n];
}

// f(n) = (1/sqrt(5))*( ( (1+sqrt(5))/2)**n - (1-sqrt(5))/2)**n ) for n>=0
function mathematicalFibonacci(n) { //O(log(n)) but it's less precise
  const sqrt5 = Math.sqrt(5)
  fib = (1/sqrt5)*( ((1+sqrt5)/2)**n - ((1-sqrt5)/2)**n );
  return Math.round(fib);
}


t0 = performance.now();//Date.now()
f0 = mathematicalFibonacci(1400)

t1 = performance.now()//Date.now();
f1 = iteractiveFibonacci(1400);

t2 = performance.now()//Date.now();
f2 = recursiveFibonacci(40);
t3 = performance.now()//Date.now();

console.log(f0, "error =",f1-f0, "time =",t1-t0)
console.log(f1, "time =", t2-t1);
console.log(f2, "time =", t3-t2);
//  1.7108476902341032e+292 "error =" -8.087771707689625e+278 "time =" 0.09999999962747097
//  1.7108476902340223e+292 "time =" 0.2999999998137355
//  102334155 "time =" 1833.2000000001863
