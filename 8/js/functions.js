//файл для заданий 2го модуля.
function checkLength(string, length) {
  return (string.length <= length);
}

function ispalindrome (string) {
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

function timeToMinutesFromMidnight(time) {
  //функция возвращает количество минут с начала суток из стоки в формате ЧЧ:мм
  const timeArray = time.split(':');
  return parseInt(timeArray[0], 10) * 60 + parseInt(timeArray[1], 10);
}

function chackTime (startWorkTime, endWorkTime, startMeetingTime, meetingDuration) {
  if (timeToMinutesFromMidnight(startWorkTime) > timeToMinutesFromMidnight(endWorkTime)) {
    return false;
  }
  if (timeToMinutesFromMidnight(startWorkTime) > timeToMinutesFromMidnight(startMeetingTime)) {
    return false;
  }
  if (timeToMinutesFromMidnight(startMeetingTime) > timeToMinutesFromMidnight(endWorkTime)) {
    return false;
  }
  if ((timeToMinutesFromMidnight(startMeetingTime) + meetingDuration) > timeToMinutesFromMidnight(endWorkTime)) {
    return false;
  }
  return true;
}


checkLength('проверяемая строка', 20);
ispalindrome('asd');
printNumber('j435nkbjg3435');
chackTime('08:00', '17:30', '14:00', 90);
