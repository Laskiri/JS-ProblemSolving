/* Problem: Given two strings s and t, return true if t is an anagram of s, 
and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word
or phrase, typically using all the original letters exactly once. */

function isAnagram(s, t) {
    let hash1 = 1;
    let hash2 = 1;
   const MOD = (Math.pow(2,31) - 1)
   const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]

  for ( let i = 0; i < Math.max(s.length, t.length); i++ ) {    // Iterate over the longest string
    let c1 = s.charCodeAt(i) - 97                               // Get ASCII value decremented by 97 and use it to map the
    let c2 = t.charCodeAt(i) - 97                               // Letter with the value of the prime number at that index
    hash1 = hash1*prime[c1] % MOD                               // Multiply the hash by the corresponding prime number
    hash2 = hash2*prime[c2] % MOD                               
  }
  return hash1 === hash2                                        
};

console.log(isAnagram("anagram", "nagaram"));