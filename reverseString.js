function reverseString(str) {
  if (str.length === 0) return '';

  //#1
  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');

  // return str.split('').reverse().join('');

  // #2
  // let reversed = '';
  // for (let char of str) {
  //   reversed = char +reversed;
  // }
  // return reversed;

  // #3
  return str.split('').reduce((reversedStr, char) => {
    return char + reversedStr;
  }, '')
}