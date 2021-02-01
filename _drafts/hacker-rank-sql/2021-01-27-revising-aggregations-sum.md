---
title: Revising Aggregations - The Sum Function
date: 2021-01-27 10:51:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Revising Aggregations - The Sum Function

## Problem:

Query the total population of all cities in **CITY** where District is **California**.

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
SELECT SUM(POPULATION) FROM CITY WHERE DISTRICT = 'California';
```
