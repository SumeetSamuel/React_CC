console.log("Hello");

/*
PS C:\Users\DELL\react_cc> git init
Initialized empty Git repository in C:/Users/DELL/react_cc/.git/
PS C:\Users\DELL\react_cc> git add .
PS C:\Users\DELL\react_cc> git commit -m "Initial commit: Added index.html"
[master (root-commit) 09feeac] Initial commit: Added index.html
 1 file changed, 5 insertions(+)
 create mode 100644 index.html
PS C:\Users\DELL\react_cc> git status
On branch master
nothing to commit, working tree clean
PS C:\Users\DELL\react_cc> git log
commit 09feeac273ec686e1db4201d46135f1cb8a93ecf (HEAD -> master)
Author: Sumeet Samuel <gsumeetsamuel1@gmail.com>
Date:   Tue Aug 11 12:08:43 2020 +0530

    Initial commit: Added index.html
PS C:\Users\DELL\react_cc> git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Style.css

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\DELL\react_cc> git add .
PS C:\Users\DELL\react_cc> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Style.css
        modified:   index.html

PS C:\Users\DELL\react_cc> git remote add origin https://github.com/SumeetSamuel/React_CC.git
PS C:\Users\DELL\react_cc> git push -u origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 263 bytes | 43.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/SumeetSamuel/React_CC.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
PS C:\Users\DELL\react_cc> git push
Everything up-to-date
PS C:\Users\DELL\react_cc> git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Style.css
        modified:   index.html

PS C:\Users\DELL\react_cc> git add .
PS C:\Users\DELL\react_cc> git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Style.css
        modified:   index.html

PS C:\Users\DELL\react_cc> git push
Everything up-to-date
PS C:\Users\DELL\react_cc> git push
Everything up-to-date
PS C:\Users\DELL\react_cc> git add Style.css
PS C:\Users\DELL\react_cc> git commit -m "Css Style added"
[master 5907427] Css Style added
 2 files changed, 5 insertions(+)
 create mode 100644 Style.css
PS C:\Users\DELL\react_cc> git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 364 bytes | 60.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/SumeetSamuel/React_CC.git
   09feeac..5907427  master -> master
PS C:\Users\DELL\react_cc> git branch
* master
PS C:\Users\DELL\react_cc> git checkout -b "my-branch"
Switched to a new branch 'my-branch'
PS C:\Users\DELL\react_cc> git branch
  master
* my-branch
PS C:\Users\DELL\react_cc> git add .
PS C:\Users\DELL\react_cc> git add app.js
PS C:\Users\DELL\react_cc> git commit -m "js feature added"
[my-branch b22a30a] js feature added
 1 file changed, 1 insertion(+)
 create mode 100644 app.js
PS C:\Users\DELL\react_cc> git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
PS C:\Users\DELL\react_cc> git merge my-branch
Updating 5907427..b22a30a
Fast-forward
 app.js | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 app.js
PS C:\Users\DELL\react_cc> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 333 bytes | 111.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/SumeetSamuel/React_CC.git
   5907427..b22a30a  master -> master
*/