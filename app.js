'use strict';

const crypto = require('crypto');

const IV_LENGTH = 16; // For AES, this is always 16

const crypto_helper =  () => {
    return crypto_helper;
};
crypto_helper.crypto = crypto;
crypto_helper.encrypt = (text) => {
 let iv = crypto.randomBytes(IV_LENGTH);

 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(crypto_helper.key), iv);
 let encrypted = cipher.update(text);

 encrypted = Buffer.concat([encrypted, cipher.final()]);

 return iv.toString('hex') + ':' + encrypted.toString('hex');
}

crypto_helper.decrypt = (text) => {
 let textParts = text.split(':');
 let iv = Buffer.from(textParts.shift(), 'hex');
 let encryptedText = Buffer.from(textParts.join(':'), 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(crypto_helper.key), iv);
 let decrypted = decipher.update(encryptedText);

 decrypted = Buffer.concat([decrypted, decipher.final()]);

 return decrypted.toString();
}

module.exports = exports = crypto_helper;