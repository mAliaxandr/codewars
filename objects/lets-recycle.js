function recycle(array) {
    let materialType = {
        paper: 0,
        glass: 1,
        organic: 2,
        plastic: 3,
    }

    let result = [[],[],[],[]];

    array.forEach( (i) => {
        let arrIndex = materialType[i.material];
        result[arrIndex].push(i.type)
        if (i.secondMaterial) {
            let arrIndex = materialType[i.secondMaterial];
            result[arrIndex].push(i.type)
            console.log('second - ', i.secondMaterial);
        }
    })
    return result;
}

console.log('result -- ', recycle([
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  ]));