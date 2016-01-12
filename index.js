// Created by Beeven on 1/12/2016
var addon = require("./build/Release/addon");


/*
 Verify Certificate with openssl
  usage:
    cert: The certificate to verify in pem format, as a string.
    ca: The trusted ca bundle in pem format
    callback: A callback function with 2 arguments, e.g.  function(err,result){}
        err: return null if verification succeeded.
             return the reason in string if verification failed.
        result: return 1 if verification succeeded.
                return 0 if verification failed.
                return -1 if there is no certificates in cert.
*/
exports.verifyCert = function(cert,ca,callback) {
    if(Buffer.isBuffer(cert)){
        cert = cert.toString();
    }
    if(Buffer.isBuffer(ca)){
        ca = ca.toString();
    }
    if(typeof(callback) === 'undefined' || callback === null) {
        return new Promise(function(resolve,reject){
            addon.verifyCert(cert,ca,function(err,result){
                if(err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
            });
        });
    } else if(typeof(callback) === 'function'){
        addon.verifyCert(cert,ca,callback);
    }
};
