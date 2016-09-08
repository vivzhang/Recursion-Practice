// Range sequence
// Recursively produce a sequence of numbers from 3 to 9 with exclusive bounds.

// redo

function range(a, b) {
  if (a + 1 === b || a >= b) {
  	return [];
  } else {
  	return [a + 1].concat(range(a + 1, b));
  }
}


console.log(range(3, 9)) // [4, 5, 6, 7, 8]




