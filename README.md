### **SOFTWARE ENGINEERING FOUNDATIONS**
# **Project: Athletica**

In this Project, we’ll use the commands we've learned to redirect files in Athletica, a sporting events directory.

<br>

# **Tasks**
#### **1. Print the working directory**

```
$ pwd
```

<br>

#### **2. List all files and directories in long format, including hidden files**

```
$ ls
```

<br>

#### **3. View the contents of basketball.txt**

```
$ cat basketball.txt
```

<br>

#### **4. View the contents of hockey.txt**

```
$ cat hockey.txt
```

<br>

#### **5. Redirect the standard output of basketball.txt into hockey.txt. Then view the contents of hockey.txt**

```
$ cat basketball.txt > hockey.txt
$ cat hockey.txt
```

<br>

#### **6. View the contents of lacrosse.txt**

```
$ cat lacrosse.txt
```

<br>

#### **7. Append the contents of lacrosse.txt to the contents of tennis.txt. Then, view the contents of tennis.txt**

```
$ cat lacrosse.txt > tennis.txt
$ cat tennis.txt
```

<br>

#### **8. Redirect the contents of gymnastics.txt as standard input for the cat command**

```
$ cat < gymnastics.txt
```

<br>

#### **9. Pipe the standard output of cat lacrosse.txt to the wordcount command**

```
$ cat lacrosse.txt | wc
```

<br>

#### **10. View the contents of equipment.txt**

```
$ cat equipment.txt
```

<br>

#### **11. Sort the contents of equipment.txt in alphabetical order**

```
$ sort equipment.txt
```

<br>

#### **12. Filter out adjacent, duplicate lines in equipment.txt**

```
$ uniq equipment.txt
```

<br>

#### **13. Search roster.txt for players from Japan**

```
$ grep Japan roster.txt 
```

<br>

#### **14. Search for the string ‘player’ in the current directory (.), and output filenames and lines for matched results**

```
$ grep -R player .
```

<br>

#### **15. View the contents of games.txt. Then, use sed to replace all instances of the word ‘loss’ with 'win' in games.txt**

```
$ cat games.txt
$ sed 's/loss/win/g' games.txt
```

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***