---
title: Select All
date: 2021-01-26 9:13:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Select All

## Problem:

Query all columns (attributes) for every row in the **CITY** table.

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
SELECT * FROM CITY;
```