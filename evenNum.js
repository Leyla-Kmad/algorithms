function evenNum(arr) {
  let evenArr = [];
  for (let i of arr) {
    if (i % 2 == 0) {
      evenArr.push(Math.pow(i, 2));
    }
   }
  return evenArr;
}