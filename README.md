## CRYPTO SIMPLE

*I just packaged the [Gist code](https://gist.github.com/vlucas/2bd40f62d20c1d49237a109d491974eb) by Vance Lucas from [his blog post](http://vancelucas.com/blog/stronger-encryption-and-decryption-in-node-js/) into a NPM package*

**[Vance Lucas](https://vancelucas.com/): If your encryption method produces the same encrypted result given the same original text input, your encryption is broken**. Yet this is what I see in most other examples around the web on how to do encryption in Node.js. Strong encryption should always produce a different output, even given the same exact input.  into a NPM package.  [Learn more about the solution](http://vancelucas.com/blog/stronger-encryption-and-decryption-in-node-js/)



## Installation 

```bash
npm install crypto-simple
```

### Usage

Generate and put your encryption key in the database or in the .env file like in this INIT example. After that you can use it for encrypting and decrypting sensitive text strings in your app.



```javascript
// INIT

const ch = require('crypto-simple');

// the key must be 256 bits (32 characters) use it to encrypt and decrypt your strings
// for example: crypto.key = ch.crypto.randomBytes(32); 
require('dotenv').config();
ch.key = process.env.ENCRYPTION_KEY; 

// ENCRYPTING
var encrypted_string = ch.encrypt("Some serious stuff");
console.log( 'encrypted: ' + encrypted_string );

// DECRYPTING
var decrypted_string = ch.decrypt(encrypted_string);
console.log( 'decrypted: ' + decrypted_string );
```

The package uses the built-in NodeJS  crypto library. You can use all methods of it with the crypto method in this package:

See above: 

`crypto.key = ch.crypto.randomBytes(32); `

## NPMJS Link

- https://www.npmjs.com/package/crypto-simple 