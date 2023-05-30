function printCharacterCase(character) {
    if (character >= 'A' && character <= 'Z') {
      console.log('upper-case');
    } else if (character >= 'a' && character <= 'z') {
      console.log('lower-case');
    } 
  }

  printCharacterCase('L');