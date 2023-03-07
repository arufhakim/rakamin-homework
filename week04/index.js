// array 100 nilai random antara 1 - 50
let randomArray = () => {
    let randomArr = [];

    for (let index = 0; index < 100; index++) {
        randomArr.push(Math.floor(Math.random() * 50) + 1);
    }

    console.log('\n============ Array Random 100 (1 - 50) ============')
    console.log(randomArr);

    return randomArr;
}

// array ganjil dan genap
let ganjilGenapArray = () => {
    let randomArr = randomArray();

    let ganjilArr = [];
    let genapArr = [];

    for (let index = 0; index < randomArr.length; index++) {
        if (index % 2 == 0) {
            genapArr.push(randomArr[index]);
        } else {
            ganjilArr.push(randomArr[index]);
        }
    }

    let gabunganArr = { ganjilArr, genapArr };

    console.log('\n============ Array Index Ganjil ============')
    console.log(ganjilArr);

    console.log('\n============ Array Index Genap ============')
    console.log(genapArr);

    return gabunganArr;

}

// min, max, total, average array
let method = () => {
    let { ganjilArr, genapArr } = ganjilGenapArray();

    let ganjilMin = 0; ganjilMax = 0; ganjilTotal = 0; ganjilAverage = 0;
    let genapMin = 0; genapMax = 0; genapTotal = 0; genapAverage = 0;

    // ganjil
    for (let index = 0; index < ganjilArr.length; index++) {

        if (ganjilMin === 0) {
            ganjilMin = ganjilArr[index];
        }

        if (ganjilMax === 0) {
            ganjilMax = ganjilArr[index];
        }

        //ganjil min
        if (ganjilArr[index] < ganjilMin) {
            ganjilMin = ganjilArr[index];
        }

        //ganjil max
        if (ganjilArr[index] > ganjilMax) {
            ganjilMax = ganjilArr[index];
        }

        //ganjil total
        ganjilTotal += ganjilArr[index];
    }

    //ganjil average
    ganjilAverage = ganjilTotal / ganjilArr.length;


    // genap
    for (let index = 0; index < genapArr.length; index++) {

        if (genapMin === 0) {
            genapMin = genapArr[index];
        }

        if (genapMax === 0) {
            genapMax = genapArr[index];
        }

        //genap min
        if (genapArr[index] < genapMin) {
            genapMin = genapArr[index];
        }

        //genap max
        if (genapArr[index] > genapMax) {
            genapMax = genapArr[index];
        }

        //genap total
        genapTotal += genapArr[index];
    }

    //genap average
    genapAverage = genapTotal / genapArr.length;

    console.log('\n============ Min, Max, Total, Average Ganjil ============')
    console.log(`Min: ${ganjilMin}`);
    console.log(`Max: ${ganjilMax}`);
    console.log(`Total: ${ganjilTotal}`);
    console.log(`Average: ${ganjilAverage}`);

    console.log('\n============ Min, Max, Total, Average Genap ============')
    console.log(`Min: ${genapMin}`);
    console.log(`Max: ${genapMax}`);
    console.log(`Total: ${genapTotal}`);
    console.log(`Average: ${genapAverage}`);

    let gabunganMethod = {
        ganjilMin, ganjilMax, ganjilTotal, ganjilAverage, genapMin, genapMax, genapTotal, genapAverage
    };

    return gabunganMethod;
}

//perbandingan
let perbandingan = () => {
    let { ganjilMin, ganjilMax, ganjilTotal, ganjilAverage, genapMin, genapMax, genapTotal, genapAverage } = method();

    console.log('\n============ Kesimpulan ============');

    //perbandingan min
    if (ganjilMin < genapMin) {
        console.log("Min Lebih Besar Array Genap");
    } else if (genapMin < ganjilMin) {
        console.log("Min Lebih Besar Array Ganjil");
    } else {
        console.log("Min Memiliki Nilai yang Sama antara Array Ganjil dan Array Genap");
    }

    //perbandingan max
    if (ganjilMax < genapMax) {
        console.log("Max Lebih Besar Array Genap");
    } else if (genapMax < ganjilMax) {
        console.log("Max Lebih Besar Array Ganjil");
    } else {
        console.log("Max Memiliki Nilai yang Sama antara Array Ganjil dan Array Genap");
    }

    //perbandingan total
    if (ganjilTotal < genapTotal) {
        console.log("Total Lebih Besar Array Genap");
    } else if (genapTotal < ganjilTotal) {
        console.log("Total Lebih Besar Array Ganjil");
    } else {
        console.log("Total Memiliki Nilai yang Sama antara Array Ganjil dan Array Genap");
    }

    //perbandingan average
    if (ganjilAverage < genapAverage) {
        console.log("Average Lebih Besar Array Genap");
    } else if (genapAverage < ganjilAverage) {
        console.log("Average Lebih Besar Array Ganjil");
    } else {
        console.log("Average Memiliki Nilai yang Sama antara Array Ganjil dan Array Genap");
    }
}

perbandingan();