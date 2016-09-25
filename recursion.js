// From ssitu001
// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	// base case: when n = 1 or n = 0, return 1
	// recursive case: n * factorial (n - 1)
	if (n === 1 || n === 0) {
		return 1;
	} else if (n < 0) {
		return null;
	} else {
		return n * factorial(n-1);
	}
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	// base case: when array === [], return 0
	// recursive case: array[0] + sum(array.slice(1));
	if (!array.length) {
		return 0;
	} else {
		return array[0] + sum(array.slice(1));
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

}

// 4. Check if a number is even.
var isEven = function(n) {
	// base case: if n is 0, return true. if n is 1 or -1, return false
	// recursive case: if n is positive, call isEven(n-2). if n is negative, call isEven(n + 2)
	if (n === 0) {
		return true;
	} else if (n === 1 || n === -1) {
		return false;
	} else if (n > 0) {
		return isEven(n - 2);
	} else {
		return isEven(n + 2);
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	// base case: if n is 1, return result. if n is -1, return result
	// recursive case: if n is positive, n - 1 + result of calling sumBelow(n - 1). if n is negative, n + 1 + result of calling sumBelow (n + 1)
	if (n === 1 || n === -1 || n === 0) {
		return 0;
	} else if (n > 0) {
		return (n - 1) + sumBelow(n - 1);
	} else {
		return (n + 1) + sumBelow(n + 1);
	}
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	// i: 2 #s
	// o: an array contains #s between those 2 #s
	// c: has to be integers
	// e: no

	// create an empty results array
	var results = [];
	var search = function(smNum, lgNum) {
	// check if x + 1 is less than y
		if ((smNum + 1) < lgNum) {
		// if so, push to results
			results.push(smNum + 1);
		} else {
			return;
		}
	// run range func again
		search(smNum + 1, lgNum);
	}
	search(x, y);
	// return results
	return results;
};

// console.log(range(2, 11));


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	// i: 2 #s, 1 base, 1 exp
	// o: a #
	// c: exp has to be positive
	// e: if base is 0, return 0

	// create variable counter = 0;
	var counter = 1;
	var result = 1;
	if (base === 0) {
		return 0;
	}
	if (exp === 0) {
		return 1;
	}
	if (exp < 0) {
		return;
	}
	// create function search
	var search = function(sampleBase) {
		// check if counter is less than or equal to exp
		if (counter <= exp) {
		  // if so, mutiply sampleBase by sampleBase, assign result to result
			result = result * sampleBase;
			// console.log(result);
		  // increase counter by 1
			counter++;
		} else {
			return;
		}
		// call search again
		search(sampleBase);
	};
	search(base);
	return result;
};
// console.log(exponent(4, 3));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
	/*
	var array = string.split('');
	var reversedArray = [];
	// make a helper function reverse that take an array
	var reverse = function(sampleArray) {
		while(sampleArray.length) {
			// push array's last element to reversedArray
			reversedArray.push(sampleArray[sampleArray.length - 1]);
			// call pop on array
			sampleArray.pop();
		  // call reverse function with array
			reverse(sampleArray);
		}
	}
	// call reverse with array
	reverse(array);
	// return reversedArray
	return reversedArray.join('');
	*/

	// better solution, w/o helper function
	// make a base case, if string's length is 0
	if (!string.length) {
		// return empty string
		return '';
	}
	// return last element in string, and then add recursive call to the string except the last one
	return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
};

// console.log(reverse('hello world'));

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	// solution with a helper function, not good
  // var array = string.split('');
  // var search = function(sampleArray) {
  //   while(sampleArray.length > 1) {
  //     if (sampleArray.splice(0, 1)[0] === sampleArray.splice(-1, 1)[0]) {
  //       isPalidrome = true;
  //     } else {
  //       isPalidrome = false;
  //     }
  //     search(sampleArray);
  //   }
  // }
  // search(array);
  // return isPalidrome;

  // base case: if string length is 0
  if (string.length === 0) {
  	// return true
  	return true;
  }
  // conver string to all alphabetical letters with no space
  string = string.match(/[A-Z]/gi).join('').toLowerCase();
  // if string[0] is not equal to last element in string
  if (string[0] !== string[string.length - 1]) {
  	// return false
  	return false;
  // otherwise
  } else {
  	// call palindrome again with string without the first and last element
  	return palindrome(string.slice(1, -1));
  }
};
// console.log(palindrome('racecar'));
// console.log(palindrome('race321@@car'));
// console.log(palindrome('Hello$World#'));

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
