---
title: Placements
date: 2021-01-29 9:36:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Placements

## Problem:

You are given three tables: Students, Friends and Packages. Students contains two columns: ID and Name. Friends contains two columns: ID and Friend_ID (ID of the ONLY best friend). Packages contains two columns: ID and Salary (offered salary in $ thousands per month).

Write a query to output the names of those students whose best friends got offered a higher salary than them. Names must be ordered by the salary amount offered to the best friends. It is guaranteed that no two students got same salary offer.

## Solution:

```sql
SELECT s.Name FROM Students AS s 
JOIN Packages AS sp ON s.ID = sp.ID 
JOIN Friends AS f ON s.ID = f.ID
JOIN Packages AS fp ON f.Friend_ID = fp.ID
WHERE sp.Salary < fp.Salary
ORDER BY fp.Salary;
```