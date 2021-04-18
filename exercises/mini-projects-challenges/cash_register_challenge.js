const currencyUnitObject = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
};

//to round to n decimal places
function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

function checkCashRegister(price, cash, cid) {
    let change = cash - price;

    if (change < 0) return undefined; // insufficient amoount of payment for the price 

    let remainingCashInCounter = 0;
    for (let i = 0; i < cid.length; ++i) {
        remainingCashInCounter += cid[i][1];
    }

    if (remainingCashInCounter === change) {
        return { "status": "CLOSED", "change": [...cid] };
    }
    else if (remainingCashInCounter < change) {
        return { "status": "INSUFFICIENT_FUNDS", "change": [] };
    }

    let changeDenominationArr = [];
    for (let i = cid.length - 1; i >= 0; --i) {
        let currUnit = currencyUnitObject[cid[i][0]]; // current currency unit
        let deductibleValue = 0;
        if (cid[i][1] !== 0 && change >= currUnit) {
            if (change >= cid[i][1]) {
                deductibleValue = cid[i][1];
            }
            else {
                deductibleValue = currUnit * Math.floor(change / currUnit);
            }
            change -= deductibleValue; // remainder change 
            cid[i][1] -= deductibleValue;
            changeDenominationArr.push([cid[i][0], deductibleValue]);
        }
        change = round(change, 2);
    }

    // the cash had the exact change in returnable denominations
    if (change === 0) {
        return { "status": "OPEN", "change": changeDenominationArr };
    }
    return { "status": "INSUFFICIENT_FUNDS", "change": [] };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

