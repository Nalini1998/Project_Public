### **SOFTWARE ENGINEERING FOUNDATIONS**
# **Project: Bicycle World**

Welcome to Bicycle World, the premier text-based bicycle shop! This shop is only accessible to programmers like , who are familiar with the command line.

In this project, we’ll use the commands we learned to navigate and edit the filesystem of this special shop.

The starting filesystem is shown below. (Bicycle World recently changed owners, who named the main directory **bicycle-world-ii**.)

```
bicycle-world-ii
|—— brands.txt
|—— freight/
|   |—— messenger/
|   |—— porteur/
|—— mountain/
|   |—— downhill/
|   |   |—— heavyweight/
|   |   |—— lightweight/
|   |—— hardtail/
|—— racing/
    |—— road/
    |—— track/
```


<br>

# **Tasks**


#### **1. Print the working directory**

```
$ pwd
```

<br>

#### **2. List the files and directories in the working directory**

```
$ ls
```

<br>

#### **3. Change directories to the freight/ directory**

```
$ cd freight
```

<br>

#### **4. List the files and directories in the working directory**

```
$ ls
```

<br>

#### **5. Change directories to the porteur/ directory**

```
$ cd porteur
```

<br>

#### **6. Change directories up two levels to the bicycle-world-ii/ directory**

> Change directories up two levels to the bicycle-world-ii/ directory

> List the files and directories in the bicycle-world-ii/ directory.

```
$ cd ../..
$ ls
```

<br>

#### **7. Change directories to the mountain/downhill/ directory**

```
$ cd mountain/downhill
```

<br>

#### **8. Make a file called dirt.txt**

```
$ touch dirt.txt
```

<br>


#### **9. Make a file called mud.txt**

```
$ touch mud.txt
```

#### **10. List the files and directories in the downhill/ directory**

```
$ ls
```

#### **11. Downhill biking is dangerous: In the downhill/ directory, make a directory called safety/**

```
$ mkdir safety
```

<br>

#### **12. Change directories to the bicycle-world-ii/ directory**

```
$ cd../...
```

<br>


#### **13. List the contents of the bicycle-world-ii/ directory**

```
$ ls
```


**The shop is adding a new type of bike!

In `bicycle-world-ii/`, make a directory called bmx/.

```
$ mkdir bmx
```

<br>

#### **14. Without changing directories from bicycle-world-ii/, make a file in the bmx/ directory called tricks.txt**

```
touch bmx/directory
```

<br>


#### **15. List all files and directories in the current directory**

<br>

#### **16. Review**

``` 
$ pwd
/home/ccuser/workspace/bicycle-world-ii
$ ls
brands.txt  freight  mountain  racing
$ cd freight
$ ls
messenger  porteur
$ cd porteur
$ ls
$ ls
$ cd ../..
$ ls
brands.txt  freight  mountain  racing
$ cd mountain/downhill
$ touch dirt.txt
$ touch mud.txt
$ ls
dirt.txt  heavyweight  lightweight  mud.txt
$ mkdir safety
$ cd ../..
$ ls
brands.txt  freight  mountain  racing
$ mkdir bmx
$ touch bmx/tricks.txt
$ ls
bmx  brands.txt  freight  mountain  racing
```

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***