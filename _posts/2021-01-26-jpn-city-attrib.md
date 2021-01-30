---
title: Japanese Cities' Attribues
date: 2021-01-26 9:33:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Japanese Cities' Attribues

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
SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN';
```
