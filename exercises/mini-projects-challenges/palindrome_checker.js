function palindrome(str) {
    let newStr = str.replace(/[_\W]+/g, "").toLowerCase();
    for (let i = 0; i < newStr.length / 2; ++i) {
        if (newStr[i] !== newStr[newStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}



palindrome("eye");


// FreeCodeCamp Test Cases 
/**
 palindrome("eye") should return a boolean.
Passed
palindrome("eye") should return true.
Passed
palindrome("_eye") should return true.
Passed
palindrome("race car") should return true.
Passed
palindrome("not a palindrome") should return false.
Passed
palindrome("A man, a plan, a canal. Panama") should return true.
Passed
palindrome("never odd or even") should return true.
Passed
palindrome("nope") should return false.
Passed
palindrome("almostomla") should return false.
Passed
palindrome("My age is 0, 0 si ega ym.") should return true.
Passed
palindrome("1 eye for of 1 eye.") should return false.
Passed
palindrome("0_0 (: /-\ :) 0-0") should return true.
Passed
palindrome("five|\_/|four") should return false.
 */