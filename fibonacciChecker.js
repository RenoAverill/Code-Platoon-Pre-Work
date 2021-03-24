function FibonacciChecker(num) { 

  // code goes here
  let fib = []
  fib[0] = 0
  fib[1] = 1
  for (let i = 2; i < 15; i++) {
    let myNum = fib[i - 1] + fib[i - 2]
    fib.push(myNum)
    if (fib[i] == num) {
    return 'yes'
    }
  }return 'no'
}