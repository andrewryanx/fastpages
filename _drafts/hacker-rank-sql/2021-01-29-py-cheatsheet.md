---
title: Python Cheat Sheet
date: 2021-01-29 10:01:00 -0000
description: 
layout: post
toc: true
comments: false
categories: [Python]
sticky_rank: 2
---

### Python Cheat Sheet

### **Import Modules**
```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import glob
```

### **Data Frame I/O**

Read CSV
```python
pd.read_csv('filepath\filename.csv')
```

Create DataFrame from multiple files and assign filename to column
```python
files = sorted(glob('filepath\*.csv')); pd.concat((pd.read_csv(file).assign(filename=file) for file in files),ignore_index=True)
```

Write CSV
```python
pd.to_csv('filepath\filename.csv', columns=['columns to write'], index=False) #write csv
```

### **Data Manipulation & Interrogation**

Select first _n_ number of rows
``` python
df.head(n)
```

Select bottom _n_ number of rows
```python
df.tail(n)
```

Select random _n_ number of rows
```python
df.sample(n) 
```

Get the shape of the DataFrame
```python
df.shape 
```

Get the dtypes of the columns
```python
df.dtypes 
```

Get the number of rows in dataframe
```python
len(df) 
```

Calculate the number of missing values
```python
df.isna().sum().sum() 
```

Returns series denoting duplicate rows
```python
df.duplicated 
```

Drop duplicates by column
```python
df.drop_duplicates(subset=['column to check for dupes'], inplace=True) 
```

Drop columns in DataFrame
```python
df.drop(columns=['column to drop'], inplace=True) 
```

Drop null values
```python
df.dropna(axis=0, how='any', subset=['columns to drop if null values exist']) 
```

Get the number of distinct values in a column
```python
df['column'].nunique() 
```

Count numer of rows with each unique value of variable
```python
df['column'].value_counts() 
```

Replace values in column with new value
```python
df['column'].replace(<current value>,<target value>) 
```

Group DataFrame by column
```python
df.groupby('column') 
```

Sort values of column 
```python
df.sortvalues('column to use', ascending=True) 
```

Filter DataFrame by multiple OR conditions
```python
df[df.column.isin(['value 1', 'value2', 'value3'])] 
```

Invert filter
```python
df[~df.column.isin(['value 1', 'value2', 'value3'])] 
```

Rename columns
```python
df.rename(columns = {'current name':'target name'}) 
```

Add prefix to column name
```python
df.add_prefix('prefix') 
```

Add suffix to column name
```python
df.add_suffix('suffix') 
```

Gather columns into rows
```python
pd.melt(df)
```

Spread rows into columns
```python
df.pivot(columns='columns to use',values='values to use') 
```

Select rows by position
```python
df.iloc[0:9]
```

Select and order top _n_ entries 
```python
df.nlargest(n) 
```

Select and order bottom _n_ entries 
```python
df.nsmallest(n) 
```

Select columns whose name matches regular expression 
```python
df.filter(regex='search term') 
```

Make column of strings uppercase
```python
df['column'].str.upper() 
```

Append rows of multiple dataframes
```python
df.concat([df1, df2]) 
```

Append columns of multiple dataframes
```python
df.concat([df1, df2], axis=1) 
```

Join matching rows drom df1 to df
```python
pd.merge(df1,df2, how='left', on='column to join on') 
```

Join rows from df2 to df1
```python
pd.merge(df1,df2, how='right', on='column to join on') 
```

Join data, retain only rows in both sets
```python
pd.merge(df1,df2, how='inner', on='column to join on') 
```

Join data, retain all values, all rows
```python
pd.merge(df1,df2, how='outer', on='column to join on') 
```

Split dataframe into two random subsets, only works if index is unique
```python
df1 = df.sample(frac=0.5,random_state=42); df2 = df.drop(df1.index) 
```

Apply function to dataframe
```python
f = lambda x: <function>; df.apply(f) 
```

```python
df.insert(<location, e.g. 3>, 'column name')
```
Split string to new column, keeping first word 
```python
df['column'] = df.column.str.split(', ',expand=True)[0] 
```

### **Descriptive Statistics**

```python
df.describe().round(3)
```

Sum values of each object.
```python
df.sum()
```

Median value of each object.
```python
df.median()
```

Quantiles of each object.
```python
df.quantile([0.25,0.75])
```

Minimum value in each object
```python
df.min()
```

Maximum value in each object.
```python
df.max()
```

Mean value of each object.
```python
df.mean()
```

Variance of each object.
```python
df.var() 
```

Standard deviation of each object
```python 
df.std() 
```

Count non-NA/null values of each object.
```python
df.count()
```

### **Feature Engineering**
One hot encode columns
```python
pd.get_dummies(df)
```

Interpolate missing values in time series data
```python
df.interpolate()
```

Fill null values
```python
df['column to find null values'].fillna(value=df['column with null values'].median(), inplace=True)
```

### **Data Visulations**
Column distributions
```python
df_nona = df.dropna(axis=0, how='any', subset=['list of columns to subset'])

ax_list = df.hist(bins=25, layout=(4,4), figsize=(15,15))
df_nona.describe().round(3)
```

Corrleation heatmap
```python
CATEGORICAL_FEATURES = ['list of columns with categorical features']

corr = df[CATEGORICAL_FEATURES].corr()
mask = np.triu(np.ones_like(corr, dtype=np.bool))

plt.figure(figsize=(20,10))

cmap = sns.diverging_palette(230, 20, as_cmap=True)

sns.heatmap(corr,mask=mask,cmap=cmap,annot=True)
```

Calendar heatmap
```python
flights = sns.load_dataset("flights")

flights = flights.pivot("month", "year", "passengers")

sns.heatmap(flights, annot=True, fmt="d")
plt.show()
```

Save figure
```python
plt.savefig('filename.ext')
```