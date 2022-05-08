---
title: 单例模式
date: 2022-05-06
sidebar: auto
categories:
 - 设计模式
 - 单例模式
tags: 
 - 设计模式
permalink: /singleton-pattern.html
publish: true
feed:
  enable: true
---
:::tip
单例模式（Singleton Pattern）是 Java 中最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。
:::

<!-- more -->

## 介绍

 **意图：** 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

 **主要解决：** 一个全局使用的类频繁地创建与销毁。

 **何时使用：** 当您想控制实例数目，节省系统资源的时候。

 **如何解决：** 判断系统是否已经有这个单例，如果有则返回，如果没有则创建。

 **关键代码：** 构造函数是私有的。

**应用实例：**

* 1、一个班级只有一个班主任。
* 2、Windows 是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。
* 3、一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。

**优点：**

* 1、在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。
* 2、避免对资源的多重占用（比如写文件操作）。

 **缺点：** 没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。

**使用场景：**

* 1、要求生产唯一序列号。
* 2、WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。
* 3、创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。

**注意：**

* 1、单例类只能有一个实例。
* 2、单例类必须自己创建自己的唯一实例。
* 3、单例类必须给所有其他对象提供这一实例。

## 实现

```cs
/// <summary>
/// 最常见的单例类，但是无法保证线程安全。因为首次运行时，n个线程可同时到达if(_instance == null)，导致_instance可能会被多初始化n-1次（有1次是需要初始化的）。在_instance被初始化之后新启动的线程不会使该情况重现。
/// </summary>
public sealed class Singleton
{

    private static Singleton _instance = null;

    public static Singleton GetInstance()
    {
        if (_instance == null)
        {
            _instance = new Singleton();
            Console.WriteLine("Singleton.GetInstance()!");
        }
        return _instance;
    }

}
```

```cs
/// <summary>
/// 使用私有静态object类型的锁（微软推荐），lock关键字会占有该锁，之后请求该锁的其它线程必需等待其释放才能进入。该方法可实现线程安全的单例模式，但是锁属于昂贵资源，“占有锁”和“释放锁”都比较耗时，并会在一定程度上阻止其它线程的执行，会显著影响程序的并发性，所以有了下面的优化。
/// </summary>
public sealed class SingletonSafe
{

    private static SingletonSafe _instance = null;

    private static readonly object _lock = new object();

    public static SingletonSafe GetInstance()
    {
        lock (_lock)
        {
            if (_instance == null)
            {
                _instance = new SingletonSafe();
                Console.WriteLine("SingletonSafe.GetInstance()!");
            }
        }
        return _instance;
    }

}
```

```cs
/// <summary>
/// 通过优先使用if (_instance == null)这种耗费资源较少的比较来决定是否进入锁，可大幅度提高性能。因为_instance不为null时，直接返回即可。
/// </summary>
public sealed class SingletonSafe2
{

    private static SingletonSafe2 _instance = null;

    private static readonly object _lock = new object();

    public static SingletonSafe2 GetInstance()
    {
        if (_instance == null)
        {
            lock (_lock)
            {
                if (_instance == null)
                {
                    _instance = new SingletonSafe2();
                    Console.WriteLine("SingletonSafe2.GetInstance()!");
                }
            }
        }
        return _instance;
    }

}
```

```cs
/// <summary>
/// 带泛型的Lazy式单例实现，这是线程安全的，仅提供给大家参考。
/// </summary>
public sealed class SingletonLazy
{

    private static readonly Lazy<SingletonLazy> _instance =
        new Lazy<SingletonLazy>(() => {
            Console.WriteLine("SingletonLazy.GetInstance()!");
            return new SingletonLazy();
        });

    public static SingletonLazy GetInstance()
    {
        return _instance.Value;
    }

}
```

```cs
/// <summary>
/// 静态只读式单例实现（由运行时保证唯一），这是线程安全的，仅提供给大家参考。
/// </summary>
public sealed class SingletonReadOnly
{

    private static readonly SingletonReadOnly _instance =
        new SingletonReadOnly();

    public SingletonReadOnly()
    {
        Console.WriteLine("SingletonReadOnly.GetInstance()!");
    }

    public static SingletonReadOnly GetInstance()
    {
        return _instance;
    }

}
```

```cs
/// <summary>
/// 复杂的泛型实现，这是线程安全的，仅提供给大家参考。
/// </summary>
/// <typeparam name="T"></typeparam>
public abstract class SingletonGenericBase<T> where T : class, new()
{

    private static T _instance = null;

    private static readonly object _lock = new object();

    public static T GetInstance()
    {
        if (_instance == null)
        {
            lock (_lock)
            {
                if (_instance == null)
                {
                    _instance = new T();
                    Console.WriteLine("SingletonGeneric.GetInstance()!");
                }
            }
        }
        return _instance;
    }

}

public sealed class SingletonGeneric : SingletonGenericBase<Singleton>
{

    public SingletonGeneric() { }

}
```

```cs
/// <summary>
/// 复杂的泛型实现，这是线程安全的，仅提供给大家参考。
/// </summary>
/// <typeparam name="T"></typeparam>
public abstract class SingletonGenericBase2<T> where T : class
{

    private static readonly Lazy<T> _instance = new Lazy<T>(() => {
        var ctors = typeof(T).GetConstructors(
            BindingFlags.Instance
            | BindingFlags.NonPublic
            | BindingFlags.Public);

        if (ctors.Count() != 1)
            throw new InvalidOperationException(
                String.Format("Type {0} must have exactly one constructor.",
                              typeof(T)));

        var ctor = ctors.SingleOrDefault(
            c => !c.GetParameters().Any() && c.IsPrivate);

        if (ctor == null)
            throw new InvalidOperationException(
                String.Format("The constructor for {0} must be private and take no parameters.",
                              typeof(T)));

        Console.WriteLine("SingletonGeneric2.GetInstance()!");
        return (T)ctor.Invoke(null);
    });

    public static T GetInstance()
    {
        return _instance.Value;
    }

}

public sealed class SingletonGeneric2 : SingletonGenericBase2<SingletonGeneric2>
{

    private SingletonGeneric2() { }

}
```

```cs
//调用
var singleton = Singleton.GetInstance();
singleton = Singleton.GetInstance();
var singletonSafe = SingletonSafe.GetInstance();
singletonSafe = SingletonSafe.GetInstance();
var singletonSafe2 = SingletonSafe2.GetInstance();
singletonSafe2 = SingletonSafe2.GetInstance();
var singletonReadOnly = SingletonReadOnly.GetInstance();
singletonReadOnly = SingletonReadOnly.GetInstance();
var singletonLazy = SingletonLazy.GetInstance();
singletonLazy = SingletonLazy.GetInstance();
var singletonGeneric = SingletonGeneric.GetInstance();
singletonGeneric = SingletonGeneric.GetInstance();
var singletonGeneric2 = SingletonGeneric2.GetInstance();
singletonGeneric2 = SingletonGeneric2.GetInstance();
Console.ReadKey();
```

```cs
//输出
Singleton.GetInstance()!
SingletonSafe.GetInstance()!
SingletonSafe2.GetInstance()!
SingletonReadOnly.GetInstance()!
SingletonLazy.GetInstance()!
SingletonGeneric.GetInstance()!
SingletonGeneric2.GetInstance()!
```
