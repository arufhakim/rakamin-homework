const {luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang} = require('./module/bangun-datar.js');

// persegi
let sisiPersegi = 3;

// persegi panjang
let panjangPersegiPanjang = 4;
let lebarPersegiPanjang = 6;

// luas & keliling persegi
console.info("====== Luas & Keliling Persegi ======");
console.info(`Sisi = ${sisiPersegi}`);
console.info(`Luas Persegi = ${luasPersegi(sisiPersegi)}`);
console.info(`Keliling Persegi = ${kelilingPersegi(sisiPersegi)}\n`);

// luas & keliling persegi panjang
console.info("====== Luas & Keliling Persegi Panjang ======");
console.info(`Panjang = ${panjangPersegiPanjang}`);
console.info(`Lebar = ${lebarPersegiPanjang}`);
console.info(`Luas Persegi Panjang = ${luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.info(`Keliling Persegi Panjang = ${kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
