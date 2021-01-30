---
title: Average Population
date: 2021-01-27 11:14:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Average Population

## Problem:

Query the average population for all cities in **CITY**, rounded down to the nearest integer.

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
SELECT ROUND(AVG(POPULATION)) FROM CITY;
```