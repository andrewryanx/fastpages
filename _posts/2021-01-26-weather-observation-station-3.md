---
title: Weather Observation Station 3
date: 2021-01-26 9:52:30 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 3

## Problem:

Query a list of **CITY** names from **STATION** for cities that have an even **ID** number. Print the results in any order, but exclude duplicates from the answer.

The **STATION** table is described as follows:

| Field      | Type |
| ----------- | ----------- |
| ID      | Number       |
| CITY   | VARCHAR2(21)        |
| STATE   | VARCHAR2(2)        |
| LAT_N   | NUMBER        |
| LONG_W   | NUMBER        |

where **LAT_N** is the northern latitude and **LONG_W** is the western longitude.

## Solution:

```sql
SELECT CITY FROM STATION WHERE (ID % 2) = 0 GROUP BY CITY;
```
