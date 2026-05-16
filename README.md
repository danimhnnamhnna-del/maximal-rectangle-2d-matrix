# Maximal Rectangle

A clean TypeScript solution to find the largest rectangular sub-matrix containing only 1s in a 2D binary matrix.

## Problem Description
Given a 2D binary matrix `mat[][]` consisting only of 0s and 1s, find the area of the largest rectangle sub-matrix that contains only 1s.

## Strategy
- **Approach:** Dynamic Scanning + Cumulative Histogram Analysis.
- **Concept:** Rows are processed sequentially to accumulate the continuous heights of 1s, treating each state as a histogram problem using boundary scanning.
- **Time Complexity:** O(Row × Col) in optimized tracking.
- **Space Complexity:** O(Col) to store the current row's histogram heights.

## Example
For matrix input:
```typescript
[
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0]
]
The maximum rectangular sub-matrix area containing only 1s is 8.

## How to Run
1. Install dependencies:
   npm install
2. Run the project:
   npm run dani

 ## Technologies Used 
  - TypeScript
  - Node.js