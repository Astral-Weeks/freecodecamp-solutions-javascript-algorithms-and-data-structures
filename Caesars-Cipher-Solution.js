function rot13(str) {
    const rOT13Cipher = {'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U', 'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y', 'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G', 'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L', 'Z': 'M', ' ': ' ', ',': ',', '?': '?', '!': '!', '.': '.'}
  
    let stringToReturn = [];
  
     for (let i = 0; i < str.length; i++) {
       let u = rOT13Cipher[str[i]];
       stringToReturn.push(u);
     }
     let finalString = stringToReturn.join("");
     console.log(finalString);
    return finalString;
  }
  
  rot13("SERR PBQR PNZC");