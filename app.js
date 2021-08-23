// ? Task:Реализуй функцию combineArrays, которая принимает 2 массива чисел (first и second) и возвращает массив чисел где N[i] это сумма чисел first[i] и second [i].

// Примечания:

// Входные массивы всегда одинакового размера.
// Примеры:

// combineArrays([1, 2, 5], [3, 6, 1]) === [4, 8, 6]
// combineArrays([1], [6]) === [7]
// combineArrays([], []) === []


// Solution 1

function combineArrays(first, second) {
  const sumArrs = [];

  for (let index = 0; index < first.length; index++) {
    sumArrs[index] = first[index] + second[index];
  }

  return sumArrs;
}

    

console.log(combineArrays([1, 2, 5], [3, 6, 1]));
console.log(combineArrays([1], [6]));
console.log(combineArrays([], []));
// ! Explanation: 
