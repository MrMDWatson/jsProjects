function permAlone(str) {
  let variables = str.slice();
  let newVariables = [];
  for (let i = 0; i < variables.length; i++) {
    let temp = [];
    for (let j = 0; j < variables.length; j++) {
      let x = variables[j];
      let y = variables[j + 1];
    }
  } 
  
  return str;
}

//permAlone("aab");

// Sort array
function bubbleSort(array) {
  let newArray = [];
  // If there is no array entered, return message
  if (!Array.isArray(array)) {return "Input an array";}
  // Sort each item in array
  for (let i = 0; i < array.length; i++) {
    // If the new array is empty, enter first value
    if (newArray.length < 1) {
      newArray.push(array[i]);
      // If the value is higher than the highest value, push value to end.
    } else if (array[i] > newArray[newArray.length - 1]) {
      newArray.push(array[i]);
      // Splice value in front of higher value 
    } else {
      // Check which value in new array is first higher value
      for (let j = 0; j < newArray.length; j++) {
        if (array[i] < newArray[j]) {
          newArray.splice(j, 0, array[i]);
          break;
        }
      }
    }
  }
  return newArray;
}

console.log(bubbleSort([10, 6, 8, 9, -67, 45, 320, 3, 33]));