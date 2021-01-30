---
title: Weather Observation Station 13
date: 2021-01-26 10:03:30 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 13

## Problem:

Query the sum of Northern Latitudes (**LAT_N**) from **STATION** having values greater than 38.7880 and less than 137.2345 . Truncate your answer to 4 decimal places.

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
SELECT ROUND(SUM(LAT_N), 4) FROM STATION WHERE LAT_N > 38.7880 AND LAT_N < 137.2345;
```
