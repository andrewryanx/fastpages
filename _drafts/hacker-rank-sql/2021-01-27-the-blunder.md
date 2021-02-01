---
title: The Blunder
date: 2021-01-27 11:18:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: The Blunder

## Problem:

Samantha was tasked with calculating the average monthly salaries for all employees in the **EMPLOYEES** table, but did not realize her keyboard's 0 key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeroes removed), and the actual average salary.

Write a query calculating the amount of error (i.e.: ```actual-miscalculated average monthly salaries```), and round it up to the next integer.

The **EMPLOYEES** table is described as follows: 

| Column | Type |
| ----------- | ----------- |
| ID | Integer |
| Name | String |
| Salary | Integer |

**Note:** Salary is measured in dollars per month and its value is <10<sup>5</sup>

| ID | Name | Salary |
|----------- | ----------- | ----------- |
| 1 | Kristeen | 1420 |
| 2 | Ashley | 2006 |
| 3 | Julia | 2210 |
| 4 | Maria | 3000 |

**Sample Output**
```2061```

**Explanation**

The table below shows the salaries without zeroes as they were entered by Samantha:

| ID | Name | Salary |
|----------- | ----------- | ----------- |
| 1 | Kristeen | 142 |
| 2 | Ashley | 26 |
| 3 | Julia | 221 |
| 4 | Maria | 3 |

## Solution:

```sql
SELECT CEIL(AVG(Salary) - AVG(REPLACE(Salary, '0', ''))) FROM EMPLOYEES;
```