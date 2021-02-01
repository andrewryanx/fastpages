---
title: Weather Observation Station 19
date: 2021-01-26 10:09:30 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 19

## Problem:

Consider *P1(a,c)* and *P2(b,d)* to be two points on a 2D plane where *(a,b)* are the respective minimum and maximum values of Northern Latitude (LAT_N) and *(c,d)* are the respective minimum and maximum values of Western Longitude (LONG_W) in **STATION**.

Query the Euclidean Distance between points *P1* and  *P2* and format your answer to display 4 decimal digits.

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
SELECT ROUND(SQRT(POW(MIN(LAT_N)-MAX(LAT_N), 2) + POW(MIN(LONG_W)-MAX(LONG_W), 2)), 4) FROM STATION;
```
