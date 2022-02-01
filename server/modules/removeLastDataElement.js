function removeLastDataElement(arr) {
  if (arr.length === 13) {
    const newArr = [...arr];
    newArr.pop();
    return newArr;
  }
  return arr;
}

module.exports = removeLastDataElement;
