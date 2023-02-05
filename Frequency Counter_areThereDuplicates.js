// Implement a function called, areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are any duplicates
// among the arguments passed in.  You can solve this using the
// frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...args) {
  let arr = [...args];
  let frequencyArr = {};
  for (const element of arr) {
    if (!frequencyArr[element]) {
      frequencyArr[element] = 1;
    } else {
      return true;
    }
  }
  return false;
}

// function areThereDuplicates(...args) {
//   return new Set(args).size !== args.length;
// }

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
