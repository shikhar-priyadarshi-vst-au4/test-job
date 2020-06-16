const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'd6F3Efeq';

const encrypt = (text) => {
    let cipher = crypto.createCipher(algorithm, password)
    return (cipher.update(text,'utf8', 'hex') + cipher.final('hex'));
}

const decrypt = (text) => {
    let decipher = crypto.createDecipher(algorithm, password);
    return (decipher.update(text,'hex', 'utf8') + decipher.final('utf-8'));
}

module.exports = {encrypt, decrypt};