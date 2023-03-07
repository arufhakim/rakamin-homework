const fs = require('fs');
const fsPromise = require('fs/promises');

if (fs.existsSync('./log/homework.log')) {
    // read homework.log
    const readLog = async () => {
        const buffer = await fsPromise.readFile('./log/homework.log');
        const readBuff = await buffer.toString('utf-8');
        console.log('Berhasil membaca homework.log!');
        return readBuff;
    }

    // write to log.txt
    const writeLog = async () => {
        const data = await readLog();
        await fsPromise.writeFile('./log/log.txt', data, 'utf-8');
        console.log('Berhasil menulis log.txt!');
    }

    writeLog();

} else {
    console.log('File homework.log tidak ditemukan!');
}