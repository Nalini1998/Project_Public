```
$ pwd
/home/ccuser/workspace/artusi
$ ls -a
.  ..  drawing  painting  sculpting
$ ls -l
total 0
drwxr-xr-x 4 ccuser ccuser 37 Mar  5  2016 drawing
drwxr-xr-x 4 ccuser ccuser 34 Mar  5  2016 painting
drwxr-xr-x 3 ccuser ccuser 18 Mar  5  2016 sculpting
$ ls -alt
total 0
drwxr-xr-x 5 ccuser ccuser 54 Jun 29 07:09 .
drwxr-xr-x 1 ccuser ccuser 20 Jun 29 07:09 ..
drwxr-xr-x 4 ccuser ccuser 37 Mar  5  2016 drawing
drwxr-xr-x 4 ccuser ccuser 34 Mar  5  2016 painting
drwxr-xr-x 3 ccuser ccuser 18 Mar  5  2016 sculpting
$ cd drawing/pencils
$ ls -a
.  ..  color.txt  graphie.txt  graphite.txt
$ cp color.txt graphite.txt
$ cd ../charcoal
$ cp compressed.txt vine.txt
$ cp vine.txt ../pencils/color.txt
$ cd ../../painting
$ pwd
/home/ccuser/workspace/artusi/painting
$ ls -alt
total 0
drwxr-xr-x 5 ccuser ccuser 54 Jun 29 07:09 ..
drwxr-xr-x 2 ccuser ccuser 69 Jun 28 18:41 brushes
drwxr-xr-x 4 ccuser ccuser 34 Mar  5  2016 .
drwxr-xr-x 4 ccuser ccuser 40 Mar  5  2016 paint
$ cd brushes
$ ls -alt
total 16
drwxr-xr-x 2 ccuser ccuser  69 Jun 28 18:41 .
-rw-r--r-- 1 ccuser ccuser  59 Jun 28 18:41 fan.txt
-rw-r--r-- 1 ccuser ccuser 133 Jun 28 18:41 flat.txt
-rw-r--r-- 1 ccuser ccuser 199 Jun 28 18:41 mop.txt
-rw-r--r-- 1 ccuser ccuser  75 Jun 28 18:41 round.txt
drwxr-xr-x 4 ccuser ccuser  34 Mar  5  2016 ..
$ cp f*.txt ../paint
$ ls
fan.txt  flat.txt  mop.txt  round.txt
$ cd ../../sculpting
$ cd clay/polymer
$ ls
airdry.txt
$ mv airdry.txt ../ceramic
$ cd ../ceramic
$ ls
airdry.txt  earthenware.txt  stoneware.txt
$ rm earthenware.txt
$ cd ..
$ ls
ceramic  dough  polymer
$ rm -rf dough
$ cd ../..
$ pwd
/home/ccuser/workspace/artusi
```