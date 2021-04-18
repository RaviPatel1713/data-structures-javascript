// generate random string id
function makeid(length = 6) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

function truthCheck(collection, pre) {
    let predicateTruthyAnalyzingList = [];
    for (const object of collection) {
        if (object.hasOwnProperty(pre)) {
            predicateTruthyAnalyzingList.push(object[pre]);
        }
        else return false;
    }

    const objectType = typeof predicateTruthyAnalyzingList[0];
    const diffObjectType = (curr) => typeof curr !== typeof predicateTruthyAnalyzingList[0];
    if (predicateTruthyAnalyzingList.some(diffObjectType)) {
        return false;
    }

    if (objectType === "boolean") {
        return predicateTruthyAnalyzingList.every(elem => elem === true) ||
            predicateTruthyAnalyzingList.every(elem => elem === false);
    }
    else if (objectType === "number") {
        return predicateTruthyAnalyzingList.every(elem => elem > 0);
    }
    else if (objectType === "string") {
        let stringOccurCounter = {};

        for (let i = 0; i < predicateTruthyAnalyzingList.length; ++i) {
            if (predicateTruthyAnalyzingList[i] === "") {
                return false;
            }
            if (stringOccurCounter.hasOwnProperty(predicateTruthyAnalyzingList[i])) {
                stringOccurCounter[predicateTruthyAnalyzingList[i]]++;
            }
            else {
                stringOccurCounter[predicateTruthyAnalyzingList[i]] = 1;
            }
        }

        if (Object.entries(stringOccurCounter).length != 2) {
            return true;
        }
        else {
            return Object.entries(stringOccurCounter).every(elem => parseInt(elem[1]) !== 1)
        }
    }

    return false; // possibly undecidable 
}

console.log(truthCheck([{ "name": "Pete", "onBoat": "male" }, { "name": "Repeat", "onBoat": "male", "alias": "Repete" }, { "name": "FastForward", "onBoat": "male" }], "onBoat"));

