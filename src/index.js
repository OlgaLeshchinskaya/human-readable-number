module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const numberString = number.toString();


  if (number === 0) return 'zero';

// until 20
if (number < 20) {
return ones[number];
}

if (numberString.length === 2) {
return (tens[numberString[0]] + ' ' + ones[numberString[1]]).replace(/ +/g, ' ').trim();
}

// from 100  to 999
if (numberString.length == 3) {
if (numberString[1] === '0' && numberString[2] === '0')
return (ones[numberString[0]] + ' hundred').replace(/ +/g, ' ').trim();
else
return (ones[numberString[0]] + ' ' + 'hundred' + ' ' + toReadable(+(numberString[1] + numberString[2]))).replace(/ +/g, ' ').trim();
}

// 1000 and more

if (numberString.length === 4) {
const bigNumber = +(numberString[1] + numberString[2] + numberString[3]);
if (bigNumber === 0) return ones[numberString[0]] + ' thousand';
if (bigNumber < 100) return ones[numberString[0]] + ' thousand ' + (bigNumber);
return (ones[numberString[0]] + ' thousand ' + toReadable(bigNumber)).replace(/ +/g, ' ').trim();
}

}
