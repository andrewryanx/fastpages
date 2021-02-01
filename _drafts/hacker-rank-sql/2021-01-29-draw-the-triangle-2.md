---
title: Draw the Triangle 2
date: 2021-01-29 9:41:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Draw the Triangle 2

## Problem:

P(R) represents a pattern drawn by Julia in R rows. The following pattern represents P(5):

```
* 
* * 
* * * 
* * * * 
* * * * *
```

Write a query to print the pattern P(20).

## Solution:

```sql
SET @number = 0;
SELECT REPEAT('* ', @number := @number+1) FROM information_schema.tables LIMIT 20;

```