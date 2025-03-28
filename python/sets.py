# set is the collection of the unordered items And it is mutable
# Each element int the set must be unique & immutable

set1 = {1,2,3,4,"Hello","name"}
set2 = {'a', 'b', 'c',2,7,9}
print(type(set1))
#collection = set()#empty set
set1.add(5)# adds an element
#set1.remove(1) #removes the element
#set1.clear() #empties the set
#set.pop() #removes a random value
print(set1.union(set2)) # combines the sets
print(set1.intersection(set2)) #combines common value
