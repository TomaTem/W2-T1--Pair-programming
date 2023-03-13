/*
Создайте функцию getZippedArrays.
У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.
*/

// Первый тест. Массив ключей: 
let keys1 = ["name","surname","address"]
// Массив значений: 
let values1 = ["Асисяй","Котовий","Йошкар-Ола"]
// Ожидаемый результат: 
// {"name":"Асисяй","surname":"Котовий","address":"Йошкар-Ола"}

// Второй тест. Массив ключей: 
let keys2 = ["color","height","weight","depth"]
// Массив значений: 
let values2 = ["чёрный","100","50","20"]
// Ожидаемый результат: 
// {"color":"чёрный","height":"100","weight":"50","depth":"20"}

// Третий тест. Массив ключей: 
let keys3 = ["country","city","month","arrivalDay","departureDay"]
// Массив значений: 
let values3 = ["Португалия","Синтра","июль","5","10"]
// Ожидаемый результат: 
// {"country":"Португалия","city":"Синтра","month":"июль","arrivalDay":"5","departureDay":"10"}

function getZippedArrays(arrcode, arrvalue) {
  let obj ={};
  for (let i=0; i<arrcode.length; i++) {
    obj[arrcode[i]] = arrvalue[i];
  }
  return obj;
}
console.log(getZippedArrays(keys1, values1))
console.log(getZippedArrays(keys2, values2))
console.log(getZippedArrays(keys3, values3))