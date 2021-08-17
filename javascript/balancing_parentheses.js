function balancingParentheses(string) {

  if(string.length == 0){
    return string.length
  }

  let splitString = string.split('')

  let opening = splitString.indexOf("(")
  if(opening >= 0){
    let following = splitString.slice(opening + 1)
    let closing = following.indexOf(")")
    if(closing >= 0){
      let beginning = splitString.slice(0, opening)
      let ending = [...following.slice(0, closing), ...following.slice(closing + 1)]
      let newArray = [...beginning, ...ending]
      let newString = newArray.join('')
      return balancingParentheses(newString)
    } else {
      return splitString.length
    }
  } else {
    return splitString.length
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("Expecting: 3");
  console.log(balancingParentheses('()()())))'));

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("Expecting: 5");
  console.log(balancingParentheses('((((('));

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
  // split string into array
  // find first instance of "("
    // if it exists, search remainder of array (everything after the "(") to find first instance of ")"
      // if both exist, remove them from array, turn array back into string, and rerun function
    // if closing parenthesis does not exist, return length of array
  // if there are no more opening parentheses, return length of array


// And a written explanation of your solution
