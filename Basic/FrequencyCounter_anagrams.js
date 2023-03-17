// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by rearranging
// the letters of another, such as cinema, formed from iceman.
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;
  let frequencyStr1 = {};
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    frequencyStr1[char] = (frequencyStr1[char] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!frequencyStr1[char]) {
      return false;
    } else {
      frequencyStr1[char] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
