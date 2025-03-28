##block of staments that perform a specific task
def cal_sum(a,b):
    return a+b

sum = cal_sum(10,20)
print(sum)

def fact(n):
    fact=1
    for i in range(1,n+1):
        fact *=i
    return fact

factorial = fact(5)
print(factorial)