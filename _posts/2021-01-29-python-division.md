---
title: Division
date: 2021-01-29 10:12:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, Python]
---

### HackerRank - Python: Division

## Problem:

The provided code stub reads two integers, _a_ and _b_ , from STDIN.

Add logic to print two lines. The first line should contain the result of integer division,  _a//b_ . The second line should contain the result of float division,  _a / b_.

No rounding or formatting is necessary.

Example
_a_ = 3
_b_ = 5

The result of the integer division _3//5 = 0_.
The result of the float division is _3//5 = 0.6_.

## Solution:

```python
a = int(input())
b = int(input())
print(a//b)
print(a/b)
```