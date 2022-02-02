function whaleTaranslator(humanText) {
  // All of our variables
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];
// Loops and if statement made so that 
  for(let i = 0; i < humanText.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if(humanText[i] === vowels[j]) {
        if (humanText[i] === 'e' || vowels[j] === 'u') {
            resultArray.push(humanText[i],vowels[j])
        } else {
            resultArray.push(humanText[i])
        }
      }
    }
  }
  return resultArray.join('').toUpperCase();
}
// The log statement to write your text that should be translated to human text
console.log(whaleTaranslator('God Is Good, All The Time!'));
