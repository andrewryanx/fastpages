---
title: Weather Observation Station 2
date: 2021-01-26 9:51:30 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 2

## Problem:

Query the following two values from the **STATION** table:

1. The sum of all values in **LAT_N** rounded to a scale of 2 decimal places.
1. The sum of all values in **LONG_W** rounded to a scale of 2 decimal places.

The **STATION** table is described as follows:

| Field      | Type |
| ----------- | ----------- |
| ID      | Number       |
| CITY   | VARCHAR2(21)        |
| STATE   | VARCHAR2(2)        |
| LAT_N   | NUMBER        |
| LONG_W   | NUMBER        |

where **LAT_N** is the northern latitude and **LONG_W** is the western longitude.

Output Format

Your results must be in the form:

```lat lon```
where ```lat``` is the sum of all values in **LAT_N** and ```lon``` is the sum of all values in **LONG_W**. Both results must be rounded to a scale of 2 decimal places.

## Solution:

```sql 
SELECT ROUND(SUM(LAT_N), 2), ROUND(SUM(LONG_W), 2) FROM STATION;
```
