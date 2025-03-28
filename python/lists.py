#lists are mutable and strings are immutable
list = [ 87, 98, 45, 78, 90, 96]
print(list[:8])
list.append(76)#adds one element at the end
list.sort() #sorts in ascending order
list.sort(reverse = True) # sort in descending order
list.reverse()  # reverse of list
list.insert(3,76)
list.remove(76) #removes first occurence of element
list.pop(3) # removes element at idx
print(list)