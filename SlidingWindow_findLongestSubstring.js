// Write a function called findLongestSubstring, which accepts a string
// and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// function findLongestSubstring(str = "") {
//   let start = 0;
//   let seen = {};
//   let longestString = 0;
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     if (seen[letter] === undefined) {
//       seen[letter] = i;
//     } else {
//       // tinh max
//       longestString = Math.max(longestString, i - start);
//       start = seen[letter] + 1;
//       i = seen[letter];
//       seen = {};
//     }
//   }
//   return Math.max(longestString, str.length - start);
// }

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
