---
title: Challenges
date: 2021-01-29 9:33:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [HackerRank, SQL]
---

### HackerRank - SQL: Challenges

## Problem:
You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!

The total score of a hacker is the sum of their maximum scores for all of the challenges. Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. Exclude all hackers with a total score of  from your result.

## Solution:

```sql
SELECT m.hacker_id, h.name, SUM(m.score) AS total_score FROM
(SELECT hacker_id, challenge_id, MAX(score) AS score FROM Submissions GROUP BY hacker_id, challenge_id) AS m
JOIN Hackers AS h ON m.hacker_id = h.hacker_id 
GROUP By m.hacker_id, h.name
HAVING total_score > 0
ORDER BY total_score DESC, m.hacker_id;
 ```