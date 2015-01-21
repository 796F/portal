# portal

portal is a simple command line LAN transfer tool.  it accepts both pipe and file/dir.  

## install

`npm install -g portal`

## piped

media files :

```
  myComp~$ cat myFace.jpg | portal
  Portal Openned : 1549

  mySecondComp~$ portal 1549 >> myFace.jpg
```

text blobs : 

```
  myComp~$ echo "kopee me to ur klipboredz" | portal
  Portal Openned : 9377

  mySecondComp~$ portal 9377 | pbcopy
```

## argument

file :

```
  myComp~$ portal myFace.jpg
  Portal Openned : 4343

  mySecondComp~$ portal 4343
  Teleported : myFace.jpg
```

entire directory : 

```
  myComp~$ portal /my/dir
  Portal Openned : 1337

  mySecondComp~$ portal 1337
  Teleported : /my/dir/porn1.jpg
  Teleported : /my/dir/porn2.jpg
  Teleported : /my/dir/porn3.jpg
  ...
  Teleported : /my/dir/porn1957283940957.jpg
```
