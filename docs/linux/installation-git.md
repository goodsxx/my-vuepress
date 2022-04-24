---
title: 在Linux上安装Git
date: 2022-04-17
sidebar: auto
categories:
 - Linux
 - Git
tags: 
 - Linux
 - Git
permalink: /installation-git.html
publish: true
feed:
  enable: true
---
:::tip
如何在Linux上安装Git
:::

<!-- more -->

1. 安装

   ```shell
   yum install -y git
   ```
2. 查看版本

   ```shell
   git --version
   ```
3. 设置用户信息

   ```shell
   git config --global user.name "Your Name"
   git config --global user.email "email@example.com"
   ```
