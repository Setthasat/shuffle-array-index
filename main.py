import random

array = ["1","2","3","4","5"]
chocieLength = 5
newIndexes = [];
shuffledArray = [];

while len(newIndexes) != chocieLength :
    x = random.randint(0,len(array))
    if not x in newIndexes :
        newIndexes.append(x)

for i in range(chocieLength) :
    shuffledArray.append(newIndexes[i])
    
print(shuffledArray)
