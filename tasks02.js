
/*Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие


 Пример:  "привет Мир" => "Привет мир" */

  const modifiedString = (string) => {
    const modifiedString =  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return modifiedString;
  };

  console.log(modifiedString('почему это так сложно'));