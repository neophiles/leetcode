# 1672: Richest Customer Wealth

[LeetCode Problem Link](https://leetcode.com/problems/richest-customer-wealth/)

**Difficulty**: `Easy`

**Topics**: `Array`, `Matrix`

**Language Used**: `TypeScript`


## Problem Summary

You are given a 2D array accounts, where each row represents a customer and each column represents the balance of one of their bank accounts. A customer's wealth is the sum of their accounts. The task is to return the highest wealth among all customers.


## Intuition

Each customer’s wealth is simply the sum of the values in a row. So the solution is to iterate through each row, compute its sum, and track the maximum value encountered.

This is a straightforward brute-force scan over the matrix.


## Algorithm

- Initialize `maxWealth` to 0.
- Loop through each customer:
    - Set `totalWealth` to 0.
    - Sum all account values in the current row.
    - If `totalWealth` is greater than `maxWealth`, update `maxWealth`.
- Return `maxWealth` after all customers are processed.


## Complexity

**Time**: O(m x n)

**Space**: O(1)


## Code

```ts
function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let totalWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            totalWealth += accounts[i][j];
        }
        if (totalWealth > maxWealth) {
            maxWealth = totalWealth;
        }
    }

    return maxWealth;
};
```