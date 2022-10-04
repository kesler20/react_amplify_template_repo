import os
import time

def push_to_heroku(backend_directory:str,commit_message: str):
  '''
  This script can be used to deploy the backend to heroku automatically

  from the documentation we need the following commands to push 
  see the documentation here https://dashboard.heroku.com/apps/journal-back-end/deploy/heroku-git
  -----
  ```git
  $ git add .
  $ git commit -am "make it better"
  $ git push heroku master
  ```
  '''
  os.chdir(backend_directory)
  os.system("python -m pytest")
  os.system("prettier -w .")
  os.system("git pull")
  os.system("git add . ")
  os.system('git commit -m "make it better"')
  os.system("git push ")
  os.system("git add .")
  os.system(f"git commit -am {commit_message}")
  os.system("git push heroku master")

def push_to_amplify(target_directory:str):
  '''
  In order to publish to amplify make sure that you have initialised the correct application
  and that the repository is bering configure

  According to the documentation after adding the hosting category you can commit by running amplify push
  ---
  ```cmd
  amplify push
  ```
  '''
  print(f"------------- cd into --> {target_directory} 🚕")
  os.chdir(target_directory)
  print("------------ running tests using npm 🧪")
  os.system("npm test")
  time.sleep(1)
  print("------------ formatting code using prettier ✨")
  os.system("prettier -w .")
  time.sleep(1)
  print("------------ the tests have passed so we can push to github ✅")
  os.system("git pull")
  time.sleep(1)
  os.system("git add . ")
  os.system('git commit -m "make it better"')
  time.sleep(1)
  os.system("git push ")
  print("------------ publishing the application to amplify ✅")
  os.system("amplify publish")
  os.system("------------ workflow completed successfully ✅")


if __name__ == "__main__":
  push_to_amplify(os.getcwd())