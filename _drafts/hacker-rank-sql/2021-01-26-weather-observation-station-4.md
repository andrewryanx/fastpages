---
title: Weather Observation Station 4
date: 2021-01-26 9:53:30 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 4

## Problem:

Query all columns for a city in **CITY** with the ID 1661.

The **CITY** table is described as follows:

| Field      | Type |
| ----------- | ----------- |
| ID      | Number       |
| CITY   | VARCHAR2(21)        |
| STATE   | VARCHAR2(2)        |
| LAT_N   | NUMBER        |
| LONG_W   | NUMBER        |


where **LAT_N** is the northern latitude and **LONG_W** is the western longitude.

For example, if there are three records in the table with CITY values 'New York', 'New York', 'Bengalaru', there are 2 different city names: 'New York' and 'Bengalaru'. The query returns 1, because ```total number of records - number of unique city name = 3 - 2 = 1```

## Solution:

```sql
SELECT COUNT(CITY) - COUNT(DISTINCT CITY) FROM STATION;
```
