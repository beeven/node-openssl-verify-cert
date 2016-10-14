#node-openssl-verify-cert


Verify a certificate against a trusted CA bundle.

This package utilizes OpenSSL library, rather than spawning a child process like many of other packages.

[![Build Status](https://travis-ci.org/beeven/node-openssl-verify-cert.svg?branch=master)](https://travis-ci.org/beeven/node-openssl-verify-cert)
[![Dependencies](https://david-dm.org/beeven/node-openssl-verify-cert.svg)](https://david-dm.org/beeven/node-openssl-verify-cert)



Installation
-------------
### Linux
```bash
$ npm install node-openssl-verify-cert
```

### Mac
On macOS 10.12 sierra, openssl must be install via brew. The default location of openssl is ```/usr/local/opt/openssl```.
```bash
$ brew install openssl
$ npm install node-openssl-verify-cert
```

### Windows
According to [https://github.com/nodejs/node-gyp/wiki/Linking-to-OpenSSL](https://github.com/nodejs/node-gyp/wiki/Linking-to-OpenSSL),
you should have OpenSSL for Windows installed in advanced.
It can be downloaded at  [http://slproweb.com/products/Win32OpenSSL.html](http://slproweb.com/products/Win32OpenSSL.html).
Make sure you have installed the full version which contains development libraries.

```bash
\> npm install node-openssl-verify-cert --openssl_root="C:/OpenSSL-Win64 (where openssl is installed)"
```

Usage
----------
```javascript
verifyCert(cert,ca,callback);
```
- **cert**: The certificate to verify in pem format, as a string.
- **ca**: The trusted ca bundle in pem format
- **callback**: A callback function with 2 arguments, e.g.  function(err,result){}. If callback is null or undefined, the function returns a promise;
    - *err*: null if verification succeeded; the reason in string if verification failed.
    - *result*: return 1 if verification succeeded,
0 if verification failed,
and -1 if there is no certificates in cert.

more examples, see unit tests.

#### Using callback
```javascript
var fs = require("fs"),
    verifier = require("node-openssl-verify-cert");

var ca = fs.readFileSync("ca.crt"),
    cert = fs.readFileSync("certToVerify.crt");

verifier.verifyCert(cert,ca,function(err,result){
    if(err) {
        console.log("Verification failed. Reason:",err);
    } else {
        console.log("Success!");
    }
});
```
#### Using promise
```javascript
verifier.verifyCert(cert,ca)
    .then(function(result){
        console.log("Success!");
    },function(err){
        console.log("Verification failed. Reason:",err);
    });

```
#### Using generator function
```javascript
var co = require("co");
co(function* (){
    yield verifier.verifyCert(cert1,ca);
    yield verifier.verifyCert(cert2,ca);
    yield verifier.verifyCert(cert3,ca);
})
.catch(function(err){
    console.log("Verification failed. Reason:",err);
})

```
