function palindrome(str) {

    // formatting string to obtain letters for testing
    let stripped = str.toLowerCase();
    let regex = /[^a-zA-Z0-9]/gi;
    let stringA = stripped.replace(regex, "");
    console.log(stringA)
  
    // testing whether string is a palindrome
    let leng = stringA.length;
    for (let i = 0; i < stringA.length; i++) {
      if (i == Math.floor(leng / 2)) {
        console.log("String is a palindrome");
        return true;
        break;
      } else if (stringA[i] == stringA[((leng - 1) - i)]) {
        continue;
      } else (stringA[i] != stringA[((leng - 1) - i)]);
        console.log("String is not a palindrome");
        return false;
        break
    }
  }
  
  palindrome("A man, a plan, a canal. Panama");
  palindrome("My age is 0, 0 si ega ym.");