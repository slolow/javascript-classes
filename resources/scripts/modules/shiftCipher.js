class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }

  // helper function
  _isLetter (char) {
    char = char.toUpperCase();
    const charCodeOfUpperA = 65;
    const charCodeOfUpperZ = 90;
    return char.charCodeAt(0) >= charCodeOfUpperA && char.charCodeAt(0) <= charCodeOfUpperZ; // A = 65, Z = 90
  }

  encrypt (string) {
    const charCodeOfUpperZ = 90;
    const numOfLetters = 26;
    for (let i=0; i<string.length; i++) {
        const char = string[i];
        const upperChar = char.toUpperCase();
        if (this._isLetter(char)) {
            const upperCharCode = upperChar.charCodeAt(0);
            const shiftedCharCode = upperCharCode + this._shift > charCodeOfUpperZ ? upperCharCode + this._shift - numOfLetters : upperCharCode + this._shift;
            const shiftedChar = String.fromCharCode(shiftedCharCode);
            string = string.replace(char, shiftedChar);
        }
    }
    return string;
  }

  decrypt (string) {
    const charCodeOfUpperA = 65;
    const numOfLetters = 26;
    for (let i=0; i<string.length; i++) {
        const char = string[i];
        const upperChar = char.toUpperCase();
        if (this._isLetter(char)) {
            const upperCharCode = upperChar.charCodeAt(0);
            const shiftedCharCode = upperCharCode - this._shift < charCodeOfUpperA ? upperCharCode - this._shift + numOfLetters : upperCharCode - this._shift;
            const shiftedChar = String.fromCharCode(shiftedCharCode).toLowerCase();
            string = string.replace(char, shiftedChar);
        }
    }
    return string;
  }
}

export default ShiftCipher;