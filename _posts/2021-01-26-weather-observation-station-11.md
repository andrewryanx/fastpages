---
title: Weather Observation Station 11
date: 2021-01-26 10:01:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Weather Observation Station 11

## Problem:

Query the list of **CITY** names from **STATION** that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

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
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '^[^aeiou]|[^aeiou]$';
```
