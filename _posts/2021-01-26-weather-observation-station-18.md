---
title: Weather Observation Station 18
date: 2021-01-26 10:08:30 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 18

## Problem:

Consider *P1(a,b)* and *P2(a,b)* to be two points on a 2D plane.

* *a* happens to equal the minimum value in Northern Latitude (LAT_N in **STATION**).
* *b* happens to equal the minimum value in Western Longitude (LONG_W in **STATION**).
* *c* happens to equal the maximum value in Northern Latitude (LAT_N in **STATION**).
* *d* happens to equal the maximum value in Western Longitude (LONG_W in **STATION**).

Query the Manhattan Distance between points *P1* and  *P@* and round it to a scale of 4 decimal places.

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
SELECT ROUND(ABS(MIN(LAT_N)-MAX(LAT_N)) + ABS(MIN(LONG_W)-MAX(LONG_W)), 4) FROM STATION;
```
