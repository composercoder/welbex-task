function removeLastDataElement(arr) {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
}

module.exports = removeLastDataElement;
