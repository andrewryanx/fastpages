---
title: Revising Aggregations - The Count Function
date: 2021-01-27 10:50:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Revising Aggregations - The Count Function

## Problem:

Query a count of the number of cities in **CITY** having a Population larger than 100,000.

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
SELECT COUNT(ID) FROM CITY WHERE POPULATION > 100000;
```