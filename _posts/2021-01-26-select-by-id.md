---
title: Select by ID
date: 2021-01-26 9:13:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Select by ID

## Problem:

Query all columns for a city in **CITY** with the ID 1661.

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
SELECT * FROM CITY WHERE ID = 1661;
```
