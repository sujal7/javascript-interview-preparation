// Check whether a character is vowel or consonant.

const vowels = ['a', 'e', 'i', 'o', 'u'];

function isVowel(ch) {
  ch = ch.toLowerCase();
  return vowels.includes(ch);
}

console.log(isVowel('a'));
console.log(isVowel('E'));
console.log(isVowel('c'));
console.log(isVowel('i'));
console.log(isVowel('S'));
console.log(isVowel('z'));
