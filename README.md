### **SOFTWARE ENGINEERING FOUNDATIONS**
# **Project: Daily Buzz**

In this project, we’ll use the commands to navigate through the files and directories of **Daily Buzz**, a national newspaper.

<br>

# **Tasks**

<br>

### **1. Print the working directory**

```
$ pwd
```

<br>

#### **2. List all files and directories in the current working directory**

```
$ ls
```

<br>

#### **3. With one command, change directories to the national/politics/directory**

```
$ cd national/politics
```

<br>

#### **4. List all files and directories in the working politics/directory**

```
$ ls
```

<br>

#### **5. In the politics/directory, create a directory called elections/**

```
$ mkdir elections
```

<br>

#### **6. Change directories into the elections/directory**

```
$ cd elections
```

<br>

#### **7. In the elections/directory, make two files candidates.txt and issues.txt**

```
$ touch candidates.txt
$ touch issues.txt
```

<br>

#### **8. Change directories three levels up to the daily-buzz/directory, and print the working directory**

```
$ cd ../../../
$ pwd
```

<br>

#### **9. In the daily-buzz/directory, make a directory called business/ and change directories into the business/directory**

```
$ mkdir business
$ cd business
```

<br>

#### **10. List all files and directories in the business/ directory**

```
$ ls
```

<br>

#### **11. From the business/directory, make a directory called startups/ and change directories into the startups/directory**

```
$ mkdir startups
$ cd startups
```

<br>

#### **12. Change directories one level up back to the business/ directory**

From the `business/directory`, make a directory that is a child of `startups/`, called `disruptors/`.

```
$ cd ../
$ mkdir startups/disruptors
```

<br>

#### **13. Make three files in the disruptors/directory**
From the `business/directory`, make three files in the `disruptors/directory`. The files should be called `tech.txt` `design.txt` and `education.txt`.

```
$ touch startups/disruptors/tech.txt
$ touch startups/disruptors/design.txt
$ touch startups/disruptors/education.txt
```

<br>

#### **14. Change directories one level up to the daily-buzz/directory and print the working directory**

```
$ cd ..
$ pwd
```

<br>


### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***
