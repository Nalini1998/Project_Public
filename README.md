### **WEB DEVELOPMENT**
# **Project: Artusi**

Let's use commands to manipulate the files and directories of Artusi, an arts supply Store.

<br>

# **Tasks**

<br>

#### **1. Print the working directory**

```
$ pwd
/home/ccuser/workspace/artusi
```

<br>

#### **2. List all contents in the current directory, including hidden files and directories**

```
$ ls -a
.  ..  drawing  painting  sculpting
```

<br>

#### **3. List all contents, in long format**

```
$ ls -l
total 0
drwxr-xr-x 4 ccuser ccuser 37 Mar  5  2016 drawing
drwxr-xr-x 4 ccuser ccuser 34 Mar  5  2016 painting
drwxr-xr-x 3 ccuser ccuser 18 Mar  5  2016 sculpting
```

<br>

#### **4. List all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified**

```
$ ls -alt
total 0
drwxr-xr-x 5 ccuser ccuser 54 Jun 29 07:09 .
drwxr-xr-x 1 ccuser ccuser 20 Jun 29 07:09 ..
drwxr-xr-x 4 ccuser ccuser 37 Mar  5  2016 drawing
drwxr-xr-x 4 ccuser ccuser 34 Mar  5  2016 painting
drwxr-xr-x 3 ccuser ccuser 18 Mar  5  2016 sculpting
```

<br>

#### **5. Change directories to the pencils/ directory. The relative path of the pencils directory is drawing/pencils/**

```
$ cd drawing/pencils
```

<br>

#### **6. List all contents in the current working directory, including hidden files and directories**

```
$ ls -a
.  ..  color.txt  graphie.txt  graphite.txt
```

<br>

#### **7. Copy the file color.txt to graphite.txt**

```
$ cp color.txt graphite.txt
```

<br>

#### **8. Change directories into the charcoal/ directory. The relative path to the charcoal directory is ../charcoal/**

```
$ cd ../charcoal
```

<br>

#### **9. Copy the file compressed.txt to vine.txt**

```
$ cp compressed.txt vine.txt
```

<br>

#### **10. Copy the file vine.txt to pencils/color.txt. The relative path of the latter is ../pencils/color.txt**

```
$ cp vine.txt ../pencils/color.txt
```

<br>

#### **11. From the charcoal/ directory, change directories to the painting/ directory. The relative path is ../../painting/**

```
$ cd ../../painting
```

<br>

#### **12. Print the working directory**

```
$ pwd
/home/ccuser/workspace/artusi/painting
```

<br>

#### **13. List all contents, in long format, including the hidden files and directories, ordered by the date and time they were last modified**

```
$ ls -alt
total 0
drwxr-xr-x 5 ccuser ccuser 54 Jun 29 07:09 ..
drwxr-xr-x 2 ccuser ccuser 69 Jun 28 18:41 brushes
drwxr-xr-x 4 ccuser ccuser 34 Mar  5  2016 .
drwxr-xr-x 4 ccuser ccuser 40 Mar  5  2016 paint
```

<br>

#### **14. Change directories to the brushes/ directory**

```
$ cd brushes
```

<br>

#### **15. List all contents, in long format, including the hidden files and directories, ordered by the date and time they were last modified**

```
$ ls -alt
total 16
drwxr-xr-x 2 ccuser ccuser  69 Jun 28 18:41 .
-rw-r--r-- 1 ccuser ccuser  59 Jun 28 18:41 fan.txt
-rw-r--r-- 1 ccuser ccuser 133 Jun 28 18:41 flat.txt
-rw-r--r-- 1 ccuser ccuser 199 Jun 28 18:41 mop.txt
-rw-r--r-- 1 ccuser ccuser  75 Jun 28 18:41 round.txt
drwxr-xr-x 4 ccuser ccuser  34 Mar  5  2016 ..
```

<br>

#### **16. Copy the files starting with the letter f from the brushes/ directory to the paint/ directory.**

- The path to the paint/ directory is ../paint/

- Without changing directories, list the files and directories of the paint/ directory.

```
$ cp f*.txt ../paint
$ ls
fan.txt  flat.txt  mop.txt  round.txt
```

<br>

#### **17. Change directories to the sculpting/ directory. The relative path is ../../sculpting/**

```
$ cd ../../sculpting
```

<br>

#### **18. List all contents, in long format, including the hidden files and directories, ordered by the date and time they were last modified**

```
$ cd clay/polymer
$ ls -alt
```

<br>

#### **19. Change directories into the clay/polymer/ directory, and list all contents of the directory**

```
$ cd clay/polymer
$ ls
airdry.txt
```

<br>

#### **20. Move airdry.txt into the ceramic/ directory. The relative path to the is ../ceramic/**

```
$ mv airdry.txt ../ceramic
```

<br>

#### **21. Change directories into the ceramic/ directory**

```
$ cd ../ceramic
```

<br>

#### **22. List all contents, including hidden files and directories**

```
$ ls -a
airdry.txt  earthenware.txt  stoneware.txt
```

<br>

#### **23. Remove earthenware.txt from the current directory**

```
$ rm earthenware.txt
```

<br>

#### **24. Change directories one level up back to the clay/ directory**

```
$ cd ..
$ ls
ceramic  dough  polymer
```

<br>

#### **25. Take a look at the contents of the current directory clay/. Delete the dough/ directory**

```
$ rm -rf dough
```

<br>

#### **26. Change directories two levels up back to the artusi/ directory. Print the working directory**

```
$ cd ../..
$ pwd
/home/ccuser/workspace/artusi
```

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***