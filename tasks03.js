/*Напишите функцию, которая принимает строку и возвращает обратную строку


Пример: "Привет мир" => "рим тевирП"
*/

const reverseString = (string) => {
  const reverseString = string.split('').reverse().join('');
  return reverseString;
};

console.log(reverseString('почему это так сложно'));