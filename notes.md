# CS260 Notes

## **Github Commands:**
*Git Add* - stages the changes (modifications) so that they can be included in the next commit. *syntax* - git add myfile.txt

*Git Commit* - Save the changes to the local repository with a message. *syntax* - git commit -m "Added myfile.txt"

*Git Commit Add and Commit* - Shortcut that combines two steps: adding changes and committing them in one go. *syntax* - git commit -am "update(notes) thoughts about startup applications"
    It won’t stage new, untracked files. For those, you need to manually run git add first.

*Git Push* - Sends changes to GitHub where you can track it on their servers. *syntax* - git push

*Git Status* - shows the current state of your working directory and staging area. It helps you see which changes have been staged for commit, which files have been modified but not yet staged, and which files are untracked (not being tracked by Git).

*Git Fetch* - command downloads updates from a remote repository but does not merge them into your local branch. It’s used to see what changes have been made in the remote repository without affecting your current working directory.

*Git Merge* - used to combine changes from one branch into your current branch. It takes the changes made in another branch and integrates them into the branch you're currently working on. After merging, both branches would contain the same code. *syntax* - git merge <branch_name>

*Git Pull* - used to fetch and merge changes from a remote repository into your current local branch in one step. It brings your local branch up-to-date with the latest changes from the remote repository. If there are any conflicts during the merge, Git will ask you to resolve them before completing the pull.


## Using Ubuntu

*SSH* - Use the ssh console program to shell into your production environment server. *Syntax:* ssh -i Desktop/mcqueen.pem ubuntu@poetryportfolios.click

*CaddyFile* - configuration file for the Caddy web server. *Commands:* :wq (w saves, q quits) *Restarting Caddy* - Restart Caddy so that your changes take effect. Note that this requires you to use sudo (super user do) to elevate your user to have the rights to restart the gateway. *syntax* - sudo service caddy restart

## HTML Notes

Make sure to have something that will load quickly be the first thing on the website. 

*Links:* Absolute and relative links. <a href="https://poetryportfolios.click/profiles">
*Elements:* div (allows you to separate), span (vertical region inside of a span?), h<1-9> headers 1-9, p (paragraph), table, ol, ul (ordered and unordered list), a (anchor the text to a hyperlink), img, &, <, 

w3schools.com -- <a href="https://www.w3schools.com/html/default.asp">


