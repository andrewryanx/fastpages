---
title: Revising the Select Query I
date: 2021-01-26 6:05:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Revising the Select Query I

## Problem:

Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.

The **CITY** table is described as follows:

| Field | Type |
| ----------- | ----------- |
| ID | Number |
| NAME | VARCHAR2(17) |
| COUNTRYCODE | VARCHAR2(3) |
| DISTRICT | VARCHAR2(20) |
| POPULATION | NUMBER |


### Solution:

```sql
SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000;
```
