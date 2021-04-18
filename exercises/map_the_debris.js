function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    arr.map(obj => {
        let avgAlt = parseFloat(obj["avgAlt"]); // assuming completely cirucular orbit
        let a = avgAlt + earthRadius;
        let orbitalPeriod = Math.round(2 * Math.PI * Math.pow(Math.pow(a, 3) / GM, 1 / 2));
        delete obj.avgAlt;                      // delete average altitude entry 
        obj["orbitalPeriod"] = orbitalPeriod;   // add new orbitalPeriod converted entry 
    });
    console.log(arr);
    return arr;
}

orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])