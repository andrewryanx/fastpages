---
title: Weather Observation Station 15
date: 2021-01-26 10:05:30 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 15

## Problem:

Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in **STATION** that is less than 137.2345. Round your answer to 4 decimal places.

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
SELECT ROUND(LONG_W, 4) FROM STATION WHERE LAT_N < 137.2345 ORDER BY LAT_N DESC LIMIT 1;
```