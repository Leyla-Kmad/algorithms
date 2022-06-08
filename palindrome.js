function palindrome(str) {
  // #1
      //const reversed = str.split('').reverse().join('');
      //console.log('reversed', reversed);
      //return str === reversed;
      
  // #2
  return str.split('').every(function(char, idx) {
    return char === str[str.length - idx -1];
  })
}