const areBracketsBalanced = (word) => {
    let r_count = 0;
    let l_count = 0;
    let r_pairs
    for(let i = 0; i < word.length; i++) {
      if (word[i] === '(') {
        l_count++;
      } else if (word[i] === ')') {
        r_count++;
      }
    }
    return l_count === r_count;
  }
  
console.log(areBracketsBalanced('())('))