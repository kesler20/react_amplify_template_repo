import os
import pexpect
child = pexpect.spawn('/test.py')
user = input("user")
child.expect('user')
child.sendline('FOO')
print(user)