const binarySearch = (numArray, key) => {
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElem = numArray[middleIndex];
  console.log("Index", middleIndex);
  console.log("elem", middleElem);
  console.log("array", numArray);

  if (middleElem === key) return console.log("true");
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else return console.log("false");
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10);
