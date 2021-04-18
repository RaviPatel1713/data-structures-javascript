function telephoneCheck(str) {
    str = str.trim();
    let invalidCharRegex = /[^0-9\s-()]/g;
    let invalidLength = (arg) => arg.length < 10 || arg.length > 16;
    let invalidNumberCount = (arg) => {
        let numberCount = (arg.match(/\d/g) || []).length;
        return numberCount !== 10 && numberCount !== 11;
    };

    let invalidParenthesisUse = (arg) => {
        arg = arg.trim();
        let openingParentCount = (arg.match(/\(/g) || []).length;
        let closingParentCount = (arg.match(/\)/g) || []).length;

        if (openingParentCount === 0 && closingParentCount === 0) {
            return false; // valid parenthesis usage 
        }
        else if (openingParentCount === 1 && closingParentCount === 1) {
            // returns invalidity if the number count inside the parenthesis is not 3 (for area code)
            return arg.indexOf(')') - arg.indexOf('(') - 1 !== 3;
        }
        return true;
    };

    if (invalidCharRegex.test(str.trim())) {
        console.log("invalid char regex");
        return false;
    }
    if (invalidLength(str)) {
        console.log("invalid length");
        return false;
    }
    if (invalidNumberCount(str)) {
        console.log("invalid number count");
        return false;
    }

    let numberCount = (str.match(/\d/g) || []).length;
    if (numberCount === 11) {
        if (parseInt(str[0]) !== 1) {
            console.log("not 1")
            return false;
        }
        str = str.slice(1);
    }

    if (invalidParenthesisUse(str)) return false;

    return true;
}

//____________ALTERNATE SOLUTION_______________
/*
function telephoneCheck(str) {
    str = str.trim();
    let invalidCharRegex = /[^0-9\s-()]/g;
    let invalidLength = (arg) => arg.length < 10 || arg.length > 16;

    let invalidParenthesisUse = (arg) => {
        arg = arg.trim();
        let openingParentCount = (arg.match(/\(/g) || []).length;
        let closingParentCount = (arg.match(/\)/g) || []).length;

        if (openingParentCount === 0 && closingParentCount === 0) {
            return false; // valid parenthesis usage
        }
        else if (openingParentCount === 1 && closingParentCount === 1) {
            // returns invalid if the number count b/w the parenthesis is not 3 (for area code)
            return arg.indexOf(')') - arg.indexOf('(') - 1 !== 3;
        }
        return true;
    };

    if (invalidCharRegex.test(str.trim()) || invalidLength(str)) {
        return false;
    }

    // the block validates that the country code is 1 with 11 telephone digits
    // and removes the country code from telephone id
    if ((str.match(/\d/g) || []).length === 11) {
        let countryCode = parseInt(str.split().splice(0, 1).join());
        console.log(countryCode);
        if (countryCode !== 1) {
            return false;
        }
    }
    // executed at the very end b/c checks the 10 digits telephone id without countrycode
    if (invalidParenthesisUse(str)) return false;

    return true;
}
 */


