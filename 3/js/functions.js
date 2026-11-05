//файл для заданий 2го модуля.
function checkLength(string, length) {
  return (string.length <= length);
}

function isPolindrom (string) {
  const str1 = string.replaceAll(' ', '').toLowerCase();
  const length = str1.length;
  let str2 = '';
  for (let i = length - 1; i >= 0; i--) {
    str2 += str1[i];
  }
  return (str1 === str2);
}

function printNumber (string) {
  const str1 = string.toString().replace(/[^\d]/g, '');
  return (str1 === '') ? NaN : parseInt(str1, 10);
}


checkLength('проверяемая строка', 20);
isPolindrom('asd');
printNumber('j435nkbjg3435');
