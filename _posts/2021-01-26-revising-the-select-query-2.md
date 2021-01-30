---
title: Revising the Select Query II
date: 2021-01-26 9:10:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Revising the Select Query II

## Problem:

Query the **NAME** field for all American cities in the **CITY** table with populations larger than 120000. The CountryCode for America is USA.

The **CITY** table is described as follows:

| Field      | Type |
| ----------- | ----------- |
| ID      | Number       |
| NAME   | VARCHAR2(17)        |
| COUNTRYCODE   | VARCHAR2(3)        |
| DISTRICT   | VARCHAR2(20)        |
| POPULATION   | NUMBER        |


## Solution:

```sql
SELECT NAME FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000;
```