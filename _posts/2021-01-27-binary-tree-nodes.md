---
title: Binary Tree Nodes
date: 2021-01-27 6:10:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Binary Tree Nodes

## Problem:

You are given a table, BST, containing two columns: N and P, where N represents the value of a node in Binary Tree, and P is the parent of N.

| Column | Type |
| ----------- | ----------- |
| N | Integer |
| P | String |


Write a query to find the node type of Binary Tree ordered by the value of the node. Output one of the following for each node:

* **Root:** If node is root node.
* **Leaf:** If node is leaf node.
* **Inner:** If node is neither root nor leaf node.

**Sample Input:**

| N | P |
| ----------- | ----------- |
| 1 | 2 |
| 3 | 2 |
| 6 | 8 |
| 9 | 8 |
| 2 | 5 |
| 8 | 5 |
| 5 | null |

**Sample Output:**

```
1 Leaf
2 Inner
3 Leaf
5 Root
6 Leaf
8 Inner
9 Leaf
```

![Binary Tree](https://raw.githubusercontent.com/andrewryanx/andrewryanx.github.io/main/assets/1443773633-f9e6fd314e-simply_sql_bst.png)

## Solution:

```sql
SELECT N, IF(P IS NULL, 'Root', IF((SELECT COUNT(*) FROM BST WHERE P=B.N)>0, 'Inner', 'Leaf')) FROM BST AS B ORDER BY N;
```
