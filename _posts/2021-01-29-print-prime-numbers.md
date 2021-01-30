---
title: Print Prime Numbers
date: 2021-01-29 9:42:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Print Prime Numbers

## Problem:

Write a query to print all prime numbers less than or equal to 1000. Print your result on a single line, and use the ampersand (&) character as your separator (instead of a space).

For example, the output for all prime numbers would be less than or equal to 10:

```
2&3&5&7
```

## Solution:

```sql
SELECT GROUP_CONCAT(NUMB SEPARATOR '&')
FROM (
    SELECT @num:=@num+1 as NUMB FROM
    information_schema.tables t1,
    information_schema.tables t2,
    (SELECT @num:=1) tmp
) tempNum
WHERE NUMB<=1000 AND NOT EXISTS(
		SELECT * FROM (
			SELECT @nu:=@nu+1 as NUMA FROM
			    information_schema.tables t1,
			    information_schema.tables t2,
			    (SELECT @nu:=1) tmp1
			    LIMIT 1000
			) tatata
		WHERE FLOOR(NUMB/NUMA)=(NUMB/NUMA) AND NUMA<NUMB AND NUMA>1
	)
```