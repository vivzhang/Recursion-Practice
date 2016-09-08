// array11 
// Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

// array11([1, 2, 11], 0) → 1
// array11([11, 11], 0) → 2
// array11([1, 2, 3, 4], 0) → 0

function array11(array, index) {
	if (index + 1 === array.length) {
		return result;
	} else {
		if (array[index] === 11) {
			result += array11(array, index + 1);
		}
	}
}

