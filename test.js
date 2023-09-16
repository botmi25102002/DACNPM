function checkDuplicateElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];
  const array3 = [5, 10, 15, 20];
  
  console.log(checkDuplicateElements(array1, array2)); // false
  console.log(checkDuplicateElements(array1, array3)); // true