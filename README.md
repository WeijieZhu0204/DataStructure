# DataStructure

[![Build Status](https://travis-ci.com/WeijieZhu0204/DataStructure.svg?branch=master)](https://travis-ci.com/WeijieZhu0204/DataStructure)



## 数组

概念：

​	数组是一种线性表结构，使用一组连续的内存空间存储。

时间复杂度：

1. 访问 O(1)

   通过下标索引进行随机访问，复杂度为O(1)。

2. 插入、删除 O(n)

   假设在数组开头插入，后面所有数据都要往后挪一位，最坏时间复杂度为O(n)。由于在每个位置插入元素的概率相同，因此平均时间复杂度为：(1+2+…+n)/n = O(n)。



## 链表

相关算法和策略：

* 最少使用策略 LFU（Least Frequently Used）
* 最近最少使用策略 LRU（Least Recently Used）

常见链表结构：

* 单链表
* 双向链表
* 循环链表