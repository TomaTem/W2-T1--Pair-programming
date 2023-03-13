/*
В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.
Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.
Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.
*/

let arr1 = ["Василий","Пётр","Иннокентий","Пётр","Иван","Василий"]
// Ожидаемый результат: 
// {"Василий":2,"Пётр":2,"Иннокентий":1,"Иван":1}

let arr2 = ["привет","пока","прощай","пока","здравствуйте","прощай"]
// Ожидаемый результат: 
// {"привет":1,"пока":2,"прощай":2,"здравствуйте":1}

let arr3 = ["картошка","картошка","кофе","торт","салат","кофе","торт","картошка"]
// Ожидаемый результат: 
// {"картошка":3,"кофе":2,"торт":2,"салат":1}

let arr4 = ["работа","работа","работа","работа","работа"]
// Ожидаемый результат: 
// {"работа":5}

function getRepeats(arr) {
  return arr.reduce(
    (acc, elem) => {
     acc[elem] = acc[elem] ? acc[elem] + 1 : 1;  
      return acc;
    }
                     , {})
}

console.log(getRepeats(arr1));
console.log(getRepeats(arr2));
console.log(getRepeats(arr3));
console.log(getRepeats(arr4));