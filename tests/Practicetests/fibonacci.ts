function fibonacci(n: number): void {
  let a: number = 0, b: number = 1;

  for (let i = 1; i <= n; i++) {
    console.log(a);
    let next: number = a + b;
    a = b;
    b = next;
  }
}

fibonacci(7);