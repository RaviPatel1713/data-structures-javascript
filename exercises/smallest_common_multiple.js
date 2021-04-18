function primeList(...boundArr) {
    if (boundArr.length > 2 || boundArr.length === 0) return undefined;

    let upperBound, lowerBound = 1;
    if (boundArr.length === 2) {
        upperBound = boundArr[1];
        lowerBound = boundArr[0];
    }
    else if (boundArr.length === 1) {
        upperBound = boundArr[0];
    }

    let arr = [];
    for (let i = 2; i <= upperBound; ++i)
        arr.push(i);

    for (let i = 0; i < Math.trunc(Math.pow(upperBound, 0.5)) - 1; ++i) {
        if (arr[i] === 0) continue; // skip 
        for (let multiplier = arr[i];
            multiplier <= upperBound / arr[i];
            ++multiplier) {
            // since array starts at value 2 (onwards), the offset is +2
            // we fix that by subtracting 2 from arr[i]*multiplier which 
            // is the multiple of arr[i] 
            arr[arr[i] * multiplier - arr[0]] = 0;
        }
    }
    let primeArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] >= lowerBound && arr[i] <= upperBound)
            primeArr.push(arr[i]);
    }
    return primeArr;
}


function smallestCommons(arr) {
    arr.sort((a, b) => a - b);

    // if the list starts 1st prime number 2 or first number 1
    if (arr[0] === 1 || arr[0] === 2) {
        let primeArr = primeList(arr[1]);
        let lcm = 1;
        for (let i = 0; i < primeArr.length; ++i) {
            let result = 1;
            let degree = -1;
            while (result <= arr[1]) {
                degree++;
                result *= primeArr[i];
            }
            lcm *= Math.pow(primeArr[i], degree);
        }
        return lcm;
    }
    else {
        let nonPrimeArr = [];
        for (let i = arr[0]; i <= arr[arr.length - 1]; ++i) {
            nonPrimeArr.push(i);
        }

        let primeArr = primeList(arr[1]);
        let primeArrBounded = [];
        for (let i = 0; i < primeArr.length; ++i) {
            if (primeArr[i] >= arr[0])
                primeArrBounded.push(primeArr[i]);
        }

        primeArrBounded.map(primeNum => {
            if (nonPrimeArr.includes(primeNum)) {
                nonPrimeArr.splice(nonPrimeArr.indexOf(primeNum), 1);
            }
        });

        let primeDegreeList = [];
        /*
        some code here to filter out into non-prime numbers list
        */
        nonPrimeLoop:
        for (let i = 0; i < nonPrimeArr.length; ++i) {
            let result = nonPrimeArr[i];
            for (let j = 0; j < primeArr.length; ++j) {
                let degree = 0;
                if (result === 0) break;
                while (result % primeArr[j] === 0) {
                    degree++;
                    result /= primeArr[j];
                }
                if (primeDegreeList.length === j) {
                    primeDegreeList.push(degree);
                }
                else if (primeDegreeList[j] < degree) {
                    primeDegreeList[j] = degree;
                }
            }
        }
        let lcm = 1;
        for (let i = 0; i < primeArr.length; ++i) {
            lcm *= Math.pow(primeArr[i], primeDegreeList[i]);
        }
        primeArrBounded.map(prime => lcm *= prime);


        return lcm;
    }
}




console.log(smallestCommons([1, 20]));
