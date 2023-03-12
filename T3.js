let number = 123;
let quantity = 0;

/* Техническое задание
Напиши программу, которая определяет сколько цифр в одном числе.
Само число записано в переменную number.
Найди количество цифр в этом числе и запиши результат в переменную quantity.
*/

function QoN(n) {
  let str = Math.abs(n).toString();
  quantity = str.length
}

QoN(number);
console.log(quantity)