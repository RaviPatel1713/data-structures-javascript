function rot13(str) {
    let decodedStr = str.toUpperCase()
        .replace(/[A-Z]/gi, currChar => {
            let decodedChar = currChar.codePointAt(0) + 13;
            return String.fromCharCode(decodedChar > 90 ? decodedChar % 91 + 65 : decodedChar);
        });
    return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));