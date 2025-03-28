age = int(input(" Enter your age : "))
if(age>=18):
    print(" Can vote & apply for license")
    print("he is mature now")

elif(age<18 and age>0):
    print("cant'vote ")
    print("can not apply for license")
else :
    print("Enter a valid age")