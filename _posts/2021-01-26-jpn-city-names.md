---
title: Japanese Cities' Names
date: 2021-01-26 9:34:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Japanese Cities' Names

## Problem:

Query the names of all the Japanese cities in the **CITY** table. The **COUNTRYCODE** for Japan is JPN.

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
SELECT NAME FROM CITY WHERE COUNTRYCODE = 'JPN';
```