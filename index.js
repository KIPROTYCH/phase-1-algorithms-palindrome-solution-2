function isPalindrome(word) {
  const length = word.length;

  // iterate from the beginning to the middle
  for (let i = 0; i < length / 2; i++) {
    const j = length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];

    if (startChar !== endChar) {
      return false;
    }
  }

  return true;

}

/* 
  Add your pseudocode here
  This means that the first letter is the same as the last letter, and the second letter is 
  the same as the first letter it returns true else it will return false.

  iterate from the beginning to the middle
  check each letter to the corresponding letter from the end

  returns true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
