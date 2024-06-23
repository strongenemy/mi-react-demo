import React, { useState, useEffect } from 'react';
import Table from "@hi-ui/table";
import './index.scss';

interface TableDataItem {
  method: string;
  result: string;
  timeComplexity: string;
  spaceComplexity: string;
  timeTaken: string;
  key: string;
}


const Fibonacci = () => {
  const [tableData, setTableData] = useState<TableDataItem[]>([]);

  useEffect(() => {
    // 普通递归计算
    function fibonacciRecursive(n: number): { result: string, timeTaken: number } {
      const startTime = performance.now();
      const result = fibonacciRecursiveHelper(n);
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      return { result, timeTaken };
    }

    function fibonacciRecursiveHelper(n: number): string {
      if (n <= 1) {
        return n.toString();
      }
      const prev = BigInt(fibonacciRecursiveHelper(n - 1));
      const prevPrev = BigInt(fibonacciRecursiveHelper(n - 2));
      return (prev + prevPrev).toString();
    }

    // 循环计算
    function fibonacciLoop(n: number): { result: string, timeTaken: number } {
      const startTime = performance.now();
      let result = '';
      if (n <= 1) {
        result = n.toString();
      } else {
        let a1 = BigInt(1), a2 = BigInt(1);
        for (let i = 2; i < n; i++) {
          [a1, a2] = [a2, a1 + a2];
        }
        result = a2.toString();
      }
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      return { result, timeTaken };
    }

    // 迭代计算
    function fibonacciIterative(n: number): { result: string, timeTaken: number } {
      const startTime = performance.now();
      let result = '';
      if (n === 1 || n === 2) {
        result = '1';
      } else {
        let a1 = BigInt(1), a2 = BigInt(1);
        for (let i = 2; i < n; i++) {
          [a1, a2] = [a2, a1 + a2];
        }
        result = a2.toString();
      }
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      return { result, timeTaken };
    }

    // 缓存计算结果
    const fibonacciMemoization = (() => {
      const cache: { [key: number]: string } = { 0: '0', 1: '1' };

      return function(n: number): { result: string, timeTaken: number } {
        const startTime = performance.now();
        let result = '';
        if (n in cache) {
          result = cache[n];
        } else {
          for (let i = 2; i <= n; i++) {
            if (!(i in cache)) {
              cache[i] = (BigInt(cache[i - 1]) + BigInt(cache[i - 2])).toString();
            }
          }
          result = cache[n];
        }
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        return { result, timeTaken };
      };
    })();

    const { result: recursive, timeTaken: recursiveTime } = fibonacciRecursive(10);
    const { result: loop, timeTaken: loopTime } = fibonacciLoop(10000);
    const { result: iterative, timeTaken: iterativeTime } = fibonacciIterative(10000);
    const { result: memoization, timeTaken: memoizationTime } = fibonacciMemoization(10000);


    const data: TableDataItem[] = [
      {
        method: '普通递归计算',
        key: 'recursive',
        result: recursive,
        timeComplexity: 'O(2^n)',
        spaceComplexity: 'O(n)',
        timeTaken: `${recursiveTime.toFixed(6)}ms`,
      },
      {
        method: '循环计算',
        key: 'loop',
        result: loop,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        timeTaken: `${loopTime.toFixed(6)}ms`,
      },
      {
        method: '迭代计算',
        key: 'iterative',
        result: iterative,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        timeTaken: `${iterativeTime.toFixed(6)}ms`,
      },
      {
        method: '缓存计算结果',
        key: 'memoization',
        result: memoization,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        timeTaken: `${memoizationTime.toFixed(6)}ms`,
      },
    ];

    setTableData(data);
  }, []);

  return (
    <div className="fibonacci">
      <h2 className="fibonacci__title">斐波那契数列计算方式对比</h2>
      <div className="fibonacci__table">
        <Table
          columns={[
            { title: '计算方式', dataKey: 'method', width: 200 },
            {
              title: '计算结果',
              dataKey: 'result',
              render: (text: string) => (
                <div className="fibonacci__result" title={text}>
                  {text.slice(0, 10)}{text.length>10 ?'...': ''}
                </div>
              ),
              width: 200,
            },
            { title: '时间复杂度', dataKey: 'timeComplexity', width: 200 },
            { title: '空间复杂度', dataKey: 'spaceComplexity', width: 200 },
            { title: '计算时间', dataKey: 'timeTaken', width: 200,
              sorter: (pre: TableDataItem, next: TableDataItem) => {
                const preTime = pre.timeTaken ? parseFloat(pre.timeTaken.replace('ms', ''))* 100000 : 0;
                const nextTime = next.timeTaken ? parseFloat(next.timeTaken.replace('ms', ''))* 100000 : 0;
                return preTime - nextTime ;
              },
            },
          ]}
          data={tableData}
        />
      </div>
    </div>
  );
};

export default Fibonacci;