/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  let isStatus = false;
  if (number >= 0) {
    isStatus = true;
  }
  return isStatus;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = c;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= a && b >= c) {
    max = b;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let isStatus = false;
  const x = (queen.x - king.x) ** 2;
  const y = (queen.y - king.y) ** 2;
  if (x === y || queen.x === king.x || queen.y === king.y) {
    isStatus = true;
  }
  return isStatus;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let isStatus = false;
  if (a > 0 && b > 0 && c > 0) {
    if (a === b && c < a + b) {
      isStatus = true;
    } else if (a === c && b < a + c) {
      isStatus = true;
    } else if (b === c && a < b + c) {
      isStatus = true;
    }
  }
  return isStatus;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNumber = '';
  const oneRoman = 'I';
  const fiveRoman = 'V';
  const tenRoman = 'X';
  const second = num % 10;
  if (num >= 10) {
    const fistValue = Math.floor(num / 10);
    switch (fistValue) {
      case 1:
        romanNumber += tenRoman;
        break;
      case 2:
        romanNumber += tenRoman + tenRoman;
        break;
      case 3:
        romanNumber += tenRoman + tenRoman + tenRoman;
        break;
      default:
        break;
    }
  }
  const startValue = romanNumber;
  for (let index = 1; index <= second; index += 1) {
    if (index === 4) {
      romanNumber = startValue + oneRoman + fiveRoman;
    } else if (index === 5) {
      romanNumber = startValue + fiveRoman;
    } else if (index === 9) {
      romanNumber = startValue + oneRoman + tenRoman;
    } else {
      romanNumber += oneRoman;
    }
  }
  return romanNumber;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let strNumber = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (numberStr[i] === '-') {
      strNumber += 'minus ';
      i += 1;
    } else if (numberStr[i] === '.' || numberStr[i] === ',') {
      strNumber += 'point ';
      i += 1;
    }
    switch (Number(numberStr[i])) {
      case 0:
        strNumber += 'zero';
        break;
      case 1:
        strNumber += 'one';
        break;
      case 2:
        strNumber += 'two';
        break;
      case 3:
        strNumber += 'three';
        break;
      case 4:
        strNumber += 'four';
        break;
      case 5:
        strNumber += 'five';
        break;
      case 6:
        strNumber += 'six';
        break;
      case 7:
        strNumber += 'seven';
        break;
      case 8:
        strNumber += 'eight';
        break;
      case 9:
        strNumber += 'nine';
        break;
      default:
        break;
    }
    if (i < numberStr.length - 1) {
      strNumber += ' ';
    }
  }
  return strNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isStatus = true;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      isStatus = false;
      break;
    }
  }
  return isStatus;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
      break;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let isStatus = false;
  const strNum = `${num}`;
  const strDigit = `${digit}`;
  for (let i = 0; i < strNum.length; i += 1) {
    if (strNum[i] === strDigit) {
      isStatus = true;
      break;
    }
  }
  return isStatus;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let indexBalance = -1;
  if (arr.length > 2) {
    let sumAll = 0;
    for (let i = 0; i < arr.length; i += 1) {
      sumAll += arr[i];
    }
    let sumLeft = 0;
    for (let index = 0; index < arr.length - 1; index += 1) {
      sumLeft += arr[index];
      const half = (sumAll - arr[index + 1]) / sumLeft;
      if (half === 2) {
        indexBalance = index + 1;
        break;
      }
    }
  }
  return indexBalance;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    let line = [];
    for (let j = 0; j < size; j += 1) {
      line = [...line, 0];
    }
    matrix[i] = line;
  }
  let number = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  while (number <= size * size) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = number;
      number += 1;
    }
    top += 1;
    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = number;
      number += 1;
    }
    right -= 1;
    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = number;
      number += 1;
    }
    bottom -= 1;
    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = number;
      number += 1;
    }
    left += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const newMatrix = matrix;
  for (let i = 0; i < size; i += 1) {
    for (let j = i; j < size; j += 1) {
      [newMatrix[i][j], newMatrix[j][i]] = [newMatrix[j][i], newMatrix[i][j]];
    }
  }
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < Math.floor(size / 2); j += 1) {
      [newMatrix[i][j], newMatrix[i][size - 1 - j]] = [
        newMatrix[i][size - 1 - j],
        newMatrix[i][j],
      ];
    }
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const array = arr;
  function partition(left, right) {
    const suport = array[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (array[i] < suport) {
        i += 1;
      }
      while (array[j] > suport) {
        j -= 1;
      }
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i += 1;
        j -= 1;
      }
    }
    return i;
  }
  function quickSort(left, right) {
    let index;
    if (array.length > 1) {
      index = partition(left, right);
      if (left < index - 1) {
        quickSort(left, index - 1);
      }
      if (index < right) {
        quickSort(index, right);
      }
    }
    return array;
  }
  return quickSort(0, array.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let changeStr = str;
  let isStatusContain = false;
  let valuesStr = [];

  function hasValue(value) {
    let isStatus = false;
    for (let index = 0; index < value.length; index += 1) {
      if (value === valuesStr[index]) {
        isStatus = true;
        break;
      }
    }
    return isStatus;
  }
  function createShuffle() {
    let newStr = '';
    for (let j = 0; j < changeStr.length; j += 2) {
      newStr += changeStr[j];
    }
    for (let j = 1; j < changeStr.length; j += 2) {
      newStr += changeStr[j];
    }
    return newStr;
  }

  if (changeStr.length > 1) {
    for (let i = 0; i < iterations; i += 1) {
      changeStr = createShuffle();
      if (!hasValue(changeStr)) {
        valuesStr = [...valuesStr, changeStr];
      } else {
        isStatusContain = true;
        break;
      }
    }
  }
  if (isStatusContain) {
    const index = (iterations % valuesStr.length) - 1;
    changeStr = valuesStr[index];
  }
  return changeStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const itemNumber = [...`${number}`];
  let resultNumber = number;
  let indexSwap = -1;
  for (let index = itemNumber.length - 1; index > 0; index -= 1) {
    if (itemNumber[index] > itemNumber[index - 1]) {
      indexSwap = index - 1;
      break;
    }
  }
  if (indexSwap !== -1) {
    let indexNext = indexSwap + 1;
    for (let i = indexSwap + 1; i < itemNumber.length; i += 1) {
      if (
        itemNumber[i] > itemNumber[indexSwap] &&
        itemNumber[i] < itemNumber[indexNext]
      ) {
        indexNext = i;
      }
    }
    [itemNumber[indexSwap], itemNumber[indexNext]] = [
      itemNumber[indexNext],
      itemNumber[indexSwap],
    ];

    const rightPart = itemNumber.splice(indexSwap + 1);
    rightPart.sort((a, b) => a - b);
    resultNumber = Number([...itemNumber, ...rightPart].join(''));
  }
  return resultNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
