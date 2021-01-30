---
title: Japan Population
date: 2021-01-27 11:15:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Japan Population

## Problem:

Query the sum of the populations for all Japanese cities in **CITY**. The COUNTRYCODE for Japan is **JPN**.

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
SELECT SUM(POPULATION) FROM CITY WHERE COUNTRYCODE = 'JPN';
```