function reverseInteger(num) {
  if (typeof num !== "number") return 'Not a Number';
  let numStr = num.toString().split('').reverse().join('');
  return parseInt(numStr)* Math.sign(num);
}