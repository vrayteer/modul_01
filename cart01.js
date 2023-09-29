'use strict';

function countUniqueIPs(ipList) {
  const uniqueIPs = {};

  for (const ip of ipList) {
    uniqueIPs[ip] = true;
  }

  return Object.keys(uniqueIPs).length;
}

const ipAddresses = [
  '192.168.1.1',
  '192.168.1.2',
  '192.168.1.1',
  '192.168.1.3',
  '192.168.1.2',
];

const uniqueCount = countUniqueIPs(ipAddresses);
console.log('Количество уникальных IP-адресов:', uniqueCount);
