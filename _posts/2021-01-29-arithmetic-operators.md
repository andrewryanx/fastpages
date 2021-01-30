---
title: Arithmetic Operators
date: 2021-01-29 10:11:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, Python]
---

### HackerRank - Python: Arithmetic Operators

## Problem:
The provided code stub reads two integers from STDIN, _a_ and _b_. Add code to print three lines where:

1. The first line contains the sum of the two numbers.
1. The second line contains the difference of the two numbers (first - second).
1. The third line contains the product of the two numbers.

Example

```python
a = 3
b = 5
```

Print the following:

```python
8
-2
15
```

## Solution:

```python
a=int(input())
b=int(input())
print(a+b)
print(a-b)
print(a*b)
```