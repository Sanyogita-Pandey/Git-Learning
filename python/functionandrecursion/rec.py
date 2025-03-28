#when function calls itself repeatedly
def print_list(list,idx=0):
    if(idx==len(list)):
        return
    print(list[idx])
    print_list(list,idx+1)


fruits = ["apple","banana","guava","grapes","orange"]

print_list(fruits)