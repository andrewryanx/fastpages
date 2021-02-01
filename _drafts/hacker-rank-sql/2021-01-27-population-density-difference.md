---
title: Population Density Difference
date: 2021-01-27 11:17:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Population Density Difference

## Problem:

Query the difference between the maximum and minimum populations in **CITY**.

The **CITY** table is described as follows: 

| Field | Type |
| ----------- | ----------- |
| ID | Number |
| NAME | VARCHAR2(17) |
| COUNTRYCODE | VARCHAR2(3) |
| DISTRICT | VARCHAR2(20) |
| POPULATION | NUMBER |

## Solution:

```sql
SELECT MAX(POPULATION) - MIN(POPULATION) FROM CITY;
```