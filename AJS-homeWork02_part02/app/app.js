let someArray = [15, 55, 125, 8, 9, 13, 88, 99, 78, 59, 1525, 1789];

const filteredWithHOF = (arr, num) => arr
    .filter((element) => element % num === 0)
    .sort((a, b) => a - b);


console.log(filteredWithHOF(someArray, 3));
