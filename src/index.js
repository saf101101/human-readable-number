module.exports = function toReadable (number) {

  const numbersOneDigit = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }

  const numbersTwoDigit1 = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }

  const numbersTwoDigit2 = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  const numbersThreeDigit = {
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred'
  }

  const arrNumber = Array.from(String(number));

  if (arrNumber.length === 1) {

    const result = arrNumber.map((item) => {return numbersOneDigit[item]});
    return result.toString();

  } else if (arrNumber.length === 2 && number < 20) {
    const z1 = arrNumber.slice(0, 1);
    const z2 = arrNumber.slice(-1);
    const newStr = z1.toString() + z2.toString();
    const newArr = [newStr];
    const arrResult = newArr.map((item) => {return numbersTwoDigit1[item]});

    return`${arrResult}`;

  } else if (arrNumber.length === 2 && number >= 20) {
    const x1 = arrNumber.slice(0, 1);
    const x2 = arrNumber.slice(-1);
    const newX1 = x1.map((item) => {return item = item * 10});

    const arrResult = newX1.map((item) => {return numbersTwoDigit2[item]});
    const arrResult1 = x2.map((item) => {return numbersOneDigit[item]});

    while (number % 10 === 0) {
      return `${arrResult}`;
    } return `${arrResult} ${arrResult1}`;

  } else {
    const y1 = arrNumber.slice(0, 1);
    const y2 = arrNumber.slice(1, 2);
    const y3 = arrNumber.slice(-1);

    const newY1 = y1.map((item) => {return item = item * 100});
    const newY2 = y2.map((item) => {return item = item * 10});

    const arrResult = newY1.map((item) => {return numbersThreeDigit[item]});
    const arrResult1 = newY2.map((item) => {return numbersTwoDigit2[item]});
    const arrResult2 = y3.map((item) => {return numbersOneDigit[item]});

    if (number % 100 === 0) {
      result = `${arrResult}`;
    } else if (number % 10 === 0 && y2 > 1) {
      result = `${arrResult} ${arrResult1}`;
    } else if (y2 < 1) {
      result = `${arrResult} ${arrResult2}`;
    } else if (y2 > 0 && y2 < 2 && y3 !== 0) {
      const a1 = arrNumber.slice(1, 2);
      const a2 = arrNumber.slice(-1);
      const newStrA = a1.toString() + a2.toString();
      const newArrA = [newStrA];
      const arrResultA = newArrA.map((item) => {return numbersTwoDigit1[item]});
      result = `${arrResult} ${arrResultA}`;

    } else if (y2 > 0 && y2 < 2 && y3 < 1) {
      const b1 = arrNumber.slice(1, 2);
      const b2 = arrNumber.slice(-1);
      const newStrB = a1.toString() + a2.toString();
      const newArrB = [newStrB];
      const arrResultB = newArrB.map((item) => {return numbersTwoDigit1[item]});
      result = `${arrResult} ${arrResultB}`;
    } else {
      result = `${arrResult} ${arrResult1} ${arrResult2}`;
    }

    return result;
  }
}
