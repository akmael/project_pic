Before we work on the project we need to...
0. git pull george master
#Once you have an up to date master branch from the main repository
1. create a branch and switch to it
  - git checkout -B [branchName]
2. git add .
3. git commit -m "good message"
  -after all your work complete
4. switch back to master
5. git pull george master
6. switch back to [branchName]
  - git checkout [branchName]
7. merge master into branch
  git merge master [[while you are on branchName]]
8. RESOLVE ALL CONFLICTS (IF ANY)
9. AFTER RESOLVING OF CONFLICTS (if any), git add .
10. AFTER RESOLVING OF CONFLICTS (if any), git commit -m "message explaining conflict resolution"
11. git push origin [branchName]
12. issue pull request from [branchName] **GITHUB**
  THEN GO TO Github.com and go to your forked repository and do a Pull Request.
  It will ask for a title.  Put in a descriptive title and use the comments to put detailed stuff about the changes you made and if you're have any issues with the code you uploaded.
13. switch back to master **gitbash**
  - git checkout master
14. git pull george master
  - after pull request update
15. delete [branchName] _optional if you are skeered_
  - git branch -D [branchName]
  - **you cannot be on the branch that you are deleting**
16. rinse and repeat

**if you are ever unsure of the branch layout, just type _git branch_**
