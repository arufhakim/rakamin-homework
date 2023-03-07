// 1
let random = Math.ceil(Math.random() * 100);

for (let index = 0; index < 1000; index++) {
    let newRandom = Math.ceil(Math.random() * 100);
    let perbandingan = random == newRandom;
    if (perbandingan) {
        console.log("iterasi: " + index);
        console.log(random + " = " + newRandom);
        break;
    }
}

// 2
let spbu = (plat, cc, ...tipe) => {
    for (let index = 0; index < tipe.length; index++) {
        if (tipe[index] == "Mobil") {
            if (plat == "Putih") {
                if (cc >= 1000 && cc <= 1500) {
                    console.log(tipe[index]);
                    console.log('BBM Subsidi');
                } else if (cc >= 1501 && cc <= 2000) {
                    console.log(tipe[index]);
                    console.log('Pertamax');
                } else if (cc >= 2001) {
                    console.log(tipe[index]);
                    console.log('Pertamax Turbo');
                } else {
                    console.log(tipe[index]);
                    console.log('Tidak Terdefinisi');
                }
            }
        } else {
            console.log(tipe[index]);
            console.log('BBM Subsidi');
        }

    }
}

let tipeKendaraan = ["Mobil", "Motor"];

let arr = [];
for (let index = 0; index < 10; index++) {
    let randomKendaraan = Math.floor(Math.random() * 2);
    arr.push(tipeKendaraan[randomKendaraan]);
}
spbu("Putih", 1501, ...arr);

