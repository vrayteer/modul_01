'use strict';

// Функция для подсчета количества уникальных IP-адресов
function countUniqueIPs(ipList) {
  // Создаем пустой объект для хранения уникальных IP-адресов
  const uniqueIPs = {};

  // Проходим по каждому IP-адресу в списке
  for (const ip of ipList) {
      // Записываем IP-адрес как свойство объекта, чтобы убедиться, что он уникален
      uniqueIPs[ip] = true;
  }

  // Возвращаем количество уникальных IP-адресов
  return Object.keys(uniqueIPs).length;
}

// Список IP-адресов
const ipAddresses = [
  "192.168.1.1",
  "192.168.1.2",
  "192.168.1.1",
  "192.168.1.3",
  "192.168.1.2"
];

const uniqueCount = countUniqueIPs(ipAddresses);
console.log("Количество уникальных IP-адресов:", uniqueCount);