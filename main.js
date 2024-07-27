const a = ["1", "2", "3", "4"];
const chocieLength = 3
let newIndexes = [];
let shuffledArray = [];

while (newIndexes.length !== chocieLength) {
    const newIndex = Math.floor(Math.random() * a.length);
    if (!newIndexes.includes(newIndex)) {
        newIndexes.push(newIndex);
    }
}

for (let i = 0; i < newIndexes.length; i++) {
    shuffledArray.push(a[newIndexes[i]]);
}

console.log(shuffledArray);
