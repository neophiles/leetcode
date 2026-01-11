# 1480: Running Sum of 1d Array

[LeetCode Problem Link](https://leetcode.com/problems/running-sum-of-1d-array/)

**Difficulty**: `Easy`

**Topics**: `Array`, `Prefix Sum`

**Language Used**: `TypeScript`


## Problem Summary

Given an array of integers `nums`, return a new array where each element at index `i` is the sum of all elements from index `0` to `i`. This repreents a standard cumulative/prefix sum transformation, where each value accumulates all previous values.


## Algorithm

- Initialize an empty array `runSum` and a variable `prev` to hold the running total.
- Loop through each value in `nums`.
- Add the current number to `prev` (or set `prev` to the first number if at index 0).
- Push `prev` into `runSum`.
- Return `runSum` after processing all elements.


## Complexity

**Time**: O(n)

**Space**: O(n)


## Code

```ts
function runningSum(nums: number[]): number[] {
    let runSum: number[] = [];
    let curr: number | null = null;
    let prev: number | null = null;

    for (let i = 0; i < nums.length; i++) {
        curr = nums[i];
        if (i === 0) {
            prev = curr;
        } else {
            prev = prev + curr;
        }
        runSum.push(prev);
    }

    return runSum;
};
```

> Unoptimized: Current solution contains extra variables and conditionals. A more efficient solution uses a single running total.

> Optimized Idea: Maintain a single running total (`sum += nums[i]`) and push it directly to the result.