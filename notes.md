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

