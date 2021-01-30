---
title: Symmetric Pairs
date: 2021-01-29 9:37:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Symmetric Pairs

## Problem:
You are given a table, Functions, containing two columns: X and Y.

Two pairs (X1, Y1) and (X2, Y2) are said to be symmetric pairs if X1 = Y2 and X2 = Y1.

Write a query to output all such symmetric pairs in ascending order by the value of X. List the rows such that X1 ≤ Y1.

## Solution:

```sql
SELECT f1.X, f1.Y FROM Functions AS f1 
WHERE f1.X = f1.Y AND 
(SELECT COUNT(*) FROM Functions WHERE X = f1.X AND Y = f1.X) > 1
UNION
SELECT f1.X, f1.Y FROM Functions AS f1, Functions AS f2
WHERE f1.X <> f1.Y AND f1.X = f2.Y AND f1.Y = f2.X AND f1.X < f2.X
ORDER BY X;
```