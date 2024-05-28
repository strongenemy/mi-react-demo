import React from 'react';

const Fibonacci = () => {
  // 普通递归计算
  function fibonacciRecursive(n: number): string {
    if (n <= 1) {
      return n.toString();
    }
    const prev = BigInt(fibonacciRecursive(n - 1));
    const prevPrev = BigInt(fibonacciRecursive(n - 2));
    return (prev + prevPrev).toString();
  }

  // 循环计算
  function fibonacciLoop(n: number): string {
    if (n <= 1) return n.toString();
    let a1 = BigInt(1), a2 = BigInt(1);
    for (let i = 2; i < n; i++) {
      [a1, a2] = [a2, a1 + a2];
    }
    return a2.toString();
  }

  // 迭代计算
  function fibonacciIterative(n: number): string {
    if (n === 1 || n === 2) return '1';
    let a1 = BigInt(1),
      a2 = BigInt(1);
    for (let i = 2; i < n; i++) {
      [a1, a2] = [a2, a1 + a2];
    }
    return a2.toString();
  }

  // 缓存计算结果
  const fibonacciMemoization = (() => {
    const cache: { [key: number]: string } = { 0: '0', 1: '1' };

    return function(n: number): string {
      if (n in cache) {
        return cache[n];
      }
      for (let i = 2; i <= n; i++) {
        if (!(i in cache)) {
          cache[i] = (BigInt(cache[i - 1]) + BigInt(cache[i - 2])).toString();
        }
      }
      return cache[n];
    };
  })();

  console.log('普通递归计算:', fibonacciRecursive(10));
  console.log('循环计算:', fibonacciLoop(10000));
  console.log('迭代计算:', fibonacciIterative(10000)); 
  console.log('缓存计算结果:', fibonacciMemoization(10000));

  return <div>斐波那契页</div>;
};

export default Fibonacci;