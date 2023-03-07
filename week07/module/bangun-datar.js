// luas persegi
const luasPersegi = (sisi) => {
    const luas = sisi * sisi;
    return luas;
}

// keliling persegi
const kelilingPersegi = (sisi) => {
    const keliling = 4 * sisi;
    return keliling;
}

// luas persegi panjang
const luasPersegiPanjang = (panjang, lebar) => {
    const luas = panjang * lebar;
    return luas;
}

// keliling persegi panjang
const kelilingPersegiPanjang = (panjang, lebar) => {
    const keliling = 2 * (panjang + lebar);
    return keliling;
}

module.exports = {luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang};