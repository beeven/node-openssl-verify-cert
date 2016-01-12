var should = require("should");

describe("Addon", function() {
    var ca = `-----BEGIN CERTIFICATE-----
MIID1TCCAr2gAwIBAgIJAOIlWeuu3sr4MA0GCSqGSIb3DQEBCwUAMIGAMQswCQYD
VQQGEwJDTjESMBAGA1UECAwJR3Vhbmdkb25nMRIwEAYDVQQHDAlHdWFuZ3pob3Ux
DDAKBgNVBAoMA0daQzELMAkGA1UECwwCSVQxCzAJBgNVBAMMAkNBMSEwHwYJKoZI
hvcNAQkBFhJiZWV2ZW5AaG90bWFpbC5jb20wHhcNMTYwMTExMDcwNTI2WhcNMTYw
MjEwMDcwNTI2WjCBgDELMAkGA1UEBhMCQ04xEjAQBgNVBAgMCUd1YW5nZG9uZzES
MBAGA1UEBwwJR3Vhbmd6aG91MQwwCgYDVQQKDANHWkMxCzAJBgNVBAsMAklUMQsw
CQYDVQQDDAJDQTEhMB8GCSqGSIb3DQEJARYSYmVldmVuQGhvdG1haWwuY29tMIIB
IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwAkNrr9lBSDG6bqnbK1WGllj
E8ipVjY0GAYmqRFpldtdISxFjSYDSpoT5fofXNw5YffvU2lWSJ0hQ73YLpw5cWwv
mMvFzwTV+ZhsF4aK6U7BPzsRibDtCPjFzTOpfrVAdpkYfNxg4KhNoSII/CT0M1J0
d05jpMfnNANL64MDOsLC/U7hAsi/V3btjvtb7tHC7gnCJz4XecyaN6ciFh8w8Wpg
a8U5qQOj6JQ8tt2ALle0OtCZ9xcqM8KkBIxG2mZA1UziGrrvfdFURsd/Fsavx5rH
rf1dIXyiCm4wWeUY2+VzIc1rMeVQsh+BjWkwxzpk+nJ/SOPyMTtXIrnlOSE8WQID
AQABo1AwTjAdBgNVHQ4EFgQUtFJswL4BCU955Ga3PGZ5ubBuso8wHwYDVR0jBBgw
FoAUtFJswL4BCU955Ga3PGZ5ubBuso8wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0B
AQsFAAOCAQEAeiDIl/IHpUmK8NI8AW+dS7OYA9R2ke5IRwKtcEh9HHG/Y8WC2n5e
B12ZqlJEi/vK5dUzAeVHvrpl6L7Gb65TfxeeL/RppMK5yOB24N1CPsJ10lIxt+QF
fFixECcFojl2/AwFf7lEIwGeNKVsOByni3qw+tWhDncD4JBTd2usOCYHZf90bQN4
w+Oo0W5lMHWHT+DGwu575k6K3/nLxzPHYLLKofVxwt2ra6uvqQBbQq+hQNJ/8Myx
J41OlbMrajDFqGkJXSH8nzzNHqzLydrvS+pL7gFMf5xtDs+ufqKKCawiuA58b1vn
OgvUXEjwi7vaipA2uDYw5+dQvuBkTNaKww==
-----END CERTIFICATE-----`;

var goodCert = `-----BEGIN CERTIFICATE-----
MIIDejCCAmICAQEwDQYJKoZIhvcNAQELBQAwgYAxCzAJBgNVBAYTAkNOMRIwEAYD
VQQIDAlHdWFuZ2RvbmcxEjAQBgNVBAcMCUd1YW5nemhvdTEMMAoGA1UECgwDR1pD
MQswCQYDVQQLDAJJVDELMAkGA1UEAwwCQ0ExITAfBgkqhkiG9w0BCQEWEmJlZXZl
bkBob3RtYWlsLmNvbTAeFw0xNjAxMTEwNzA5MjRaFw0xNjAyMTAwNzA5MjRaMIGE
MQswCQYDVQQGEwJDTjESMBAGA1UECAwJR3Vhbmdkb25nMRIwEAYDVQQHDAlHdWFu
Z3pob3UxDDAKBgNVBAoMA0daQzELMAkGA1UECwwCSVQxDzANBgNVBAMMBlNlcnZl
cjEhMB8GCSqGSIb3DQEJARYSYmVldmVuQGhvdG1haWwuY29tMIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuF5DGz5pCniKcOWpJGXiTrZz030ixko4ztFF
LF+RIYyE78ux62UuTgWIJdVrriPutwNNkYqYBj5E+tEEjyOIx7C6qZGmRQp5Gp6E
V9i2SipA/0Jr0CFN+M1hdOG8LyIxv/LNxoHQeT9pIGdKqGd5qrTQ4UiyeEb+Qzjb
Dr73rFRAwQuClPGARcWQRWQ8x2PrcDPeF6IvqmvGu1v4v9PxEkkUzM322F7fCNoC
aWl4u1A1ayq5dewm7LzNY5JVhqtTJaMacc2I9yntsf7bytx91soKO2+xFoNNSjbY
xsCFUF0XEOTEyPZLFyx3qrXIQY79/Pi20n5bHZuBgTGsd5ESrwIDAQABMA0GCSqG
SIb3DQEBCwUAA4IBAQAfHjiyC35/xJDD6SzwXn7wIYUq0xyCXuNnYPvmIUwOJibC
7feMriVL8P/HWDjef8EX/cDEDgUnDTGcPYR3e3pO3idroFWFkNGgpHyUX1c+g3Xt
21ShU0M1R6azEtJV9UN7W/xpBkuv9FJsYDof/7TK9g0uuXgsCK2501ln2jEXEB/+
GB+bZMbLuzQkKQXIFqZz1SktYU+VyT+4OIvolBytfUhNUSztt7YcxuLVsXoiBzFh
87g2I+8TEPDWyebSWoyWP70g/42zmNybel+SnjlYIjSM10HM4jJg4yQYu4xe/t4m
bnpNaaue+EKc79B25yIJdxLIw03CcreT6ROArgnr
-----END CERTIFICATE-----`;

var badCert = `-----BEGIN CERTIFICATE-----
MIIDejCCAmICAQEwDQYJKoZIhvcNAQELBQAwgYAxCzAJBgNVBAYTAkNOMRIwEAYD
VQQIDAlHdWFuZ2RvbmcxEjAQBgNVBAcMCUd1YW5nemhvdTEMMAoGA1UECgwDR1pD
MQswCQYDVQQLDAJJVDELMAkGA1UEAwwCQ0ExITAfBgkqhkiG9w0BCQEWEmJlZXZl
bkBob3RtYWlsLmNvbTAeFw0xNjAxMTEwNzA5MjRaFw0xNjAyMTAwNzA5MjRaMIGE
MQswCQYDVQQGEwJDTjESMBAGA1UECAwJR3Vhbmdkb25nMRIwEAYDVQQHDAlHdWFu
Z3pob3UxDDAKBgNVBAoMA0daQzELMAkGA1UECwwCSVQxDzANBgNVBAMMBlNlcnZl
cjEhMB8GCSqGSIb3DQEJARYSYmVldmVuQGhvdG1haWwuY29tMIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuF5DGz5pCniKcOWpJGXiTrZz030ixko4ztFF
LF+RIYyE78ux62UuTgWIJdVrriPutwNNkYqYBj5E+tEEjyOIx7C6qZGmRQp5Gp6E
V9i2SipA/0Jr0CFN+M1hdOG8LyIxv/LNxoHQeT9pIGdKqGd5qrTQ4UiyeEb+Qzjb
Dr73rFRAwQuClPGARcWQRWQ8x2PrcDPeF6IvqmvGu1v4v9PxEkkUzM322F7fCNoC
aWl4u1A1ayq5dewm7LzNY5JVhqtTJaMacc2I9yntsf7bytx91soKO2+xFoNNSjbY
xsCFUF0XEOTEyPZLFyx3qrXIQY79/Pi20n5bHZuBgTGsd5ESrwIDAQABMA0GCSqG
SIb3DQEBCwUAA4IBAQAfHjiyC35/xJDD6SzwXn7wIYUq0xyCXuNnYPvmIUwOJibC
7feMriVL8P/HWDjef8EX/cDEDgUnDTGcPYR3e3pO3idroFWFkNGgpHyUX1c+g3Xt
21ShU0M1R6azEtJV9UN7W/xpBkuv9FJsYDof/7TK9g0uuXgsCK2501ln2jEXEB/+
GB+bZMbLuzQkKQXIFqZz1SktYU+VyT+4OIvolBytfUhNUSztt7YcxuLVsXoiBzFh
87g2I+8TEPDWyebSWoyWP70g/42zmNybel+snjlYIjSM10HM4jJg4yQYu4xe/t4m
bnpNaaue+EKc79B25yIJdxLIw03CcreT6ROArgnr
-----END CERTIFICATE-----`;

    var plugin = require("../");
    it("should return 1 if certificates are valid", function(done) {
        plugin.verifyCert(goodCert, ca,function(err,ret){
            should(err).be.Null();
            ret.should.equal(1);
            done();
        });
    });

    it("should return 0 if cert is not valid", function(done) {
        plugin.verifyCert(badCert, ca,function(err,ret){
            ret.should.equal(0);
            err.should.not.be.Null();
            done()
        });
    });

    it("should return a promise if no callback", function(done){
        var p = plugin.verifyCert(goodCert,ca);
        p.should.be.a.Promise();
        p.then(function(result){
            result.should.equal(1);
            done();
        },function(err){
            done(err);
        })
    });

    it("should return a promise which is rejected with an error if certificate is not valid.", function(done){
        var p = plugin.verifyCert(badCert,ca);
        p.then(function(result){
            done("Should not be here");
        },function(err){
            err.should.not.be.Null();
            done();
        })
    });
})
