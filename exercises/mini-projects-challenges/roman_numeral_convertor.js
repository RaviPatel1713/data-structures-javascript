const romanSymbol = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
const romanSymbolValue = [1000, 500, 100, 50, 10, 5, 1];

function convertToRoman(num) {
    if (num < 1 || num > 3999) return undefined;

    let curr = 0;
    let romanNumeral = "";

    let findQuotient = (dividend, divisor) => Math.floor(dividend / divisor);

    while (curr < romanSymbol.length) {
        if (findQuotient(num, romanSymbolValue[curr]) === 4) {
            romanNumeral += romanSymbol[curr] + romanSymbol[curr - 1];
            num -= 4 * romanSymbolValue[curr];
        }
        else if (findQuotient(num, romanSymbolValue[curr]) === 9) {
            romanNumeral += romanSymbol[curr] + romanSymbol[curr - 2];
            num -= 9 * romanSymbolValue[curr];
        }
        else if (curr % 2 == 0 || findQuotient(num, romanSymbolValue[curr + 1]) !== 9) {
            let temp = Math.floor(num / romanSymbolValue[curr]);
            for (let i = 0; i < temp; ++i) {
                romanNumeral += romanSymbol[curr];
                num -= romanSymbolValue[curr];
            }
        }
        curr++;
    };
    return romanNumeral;
}



console.log(convertToRoman(1234));




/**
    // if (num / romanSymbolValue[i] === 0) {
    //     // for (500, 50, 5)
    //     if (i % 2 === 1) {
    //         if (num / romanSymbolValue[i + 1] === 4) {
    //             romanNumeral += romanSymbol[i + 1] + romanSymbol[i];
    //             num %= romanSymbolValue[i + 1];
    //             continue;
    //         }
    //     }
    //     // for all 10th base place value (1000, 100, 10, 1)
    //     else {
    //         if (num / romanSymbolValue[i + 2] === 4 || num / romanSymbolValue[i + 2] === 9) {
    //             romanNumeral += romanSymbol[i + 2] + romanSymbol[i];
    //             let num = temp;
    //             num %= romanSymbolValue[i + 2];
    //             continue;
    //         }
    //     }
    // }
    // else {
    //     for (let i = 0; i < num % romanSymbolValue[i]; ++i) {
    //         romanNumeral += romanSymbol[i];
    //     }
    // }

    // // for (500, 50, 5)
    // if (i % 2 === 1) {
    //     if (num / romanSymbolValue[i] === 0) {
    //         if (num / romanSymbolValue[i + 1] === 4) {
    //             romanNumeral += romanSymbol[i + 1] + romanSymbol[i];
    //             num %= romanSymbolValue[i + 1];
    //             continue;
    //         }
    //     }
    // }
    // // for all 10th base place value (1000, 100, 10, 1)
    // if (i % 2 === 0 && num / romanSymbolValue[i] === 0) {
    //     if (num / romanSymbolValue[i + 2] === 4 || num / romanSymbolValue[i + 2] === 9) {
    //         romanNumeral += romanSymbol[i + 2] + romanSymbol[i];
    //         let num = temp;
    //         num %= romanSymbolValue[i + 2];
    //         continue;
    //     }
    // }
 */