var should = require("should");

describe("Index", function() {
    var ca = "-----BEGIN CERTIFICATE-----\n"+
"MIID1TCCAr2gAwIBAgIJAOIlWeuu3sr4MA0GCSqGSIb3DQEBCwUAMIGAMQswCQYD\n"+
"VQQGEwJDTjESMBAGA1UECAwJR3Vhbmdkb25nMRIwEAYDVQQHDAlHdWFuZ3pob3Ux\n"+
"DDAKBgNVBAoMA0daQzELMAkGA1UECwwCSVQxCzAJBgNVBAMMAkNBMSEwHwYJKoZI\n"+
"hvcNAQkBFhJiZWV2ZW5AaG90bWFpbC5jb20wHhcNMTYwMTExMDcwNTI2WhcNMTYw\n"+
"MjEwMDcwNTI2WjCBgDELMAkGA1UEBhMCQ04xEjAQBgNVBAgMCUd1YW5nZG9uZzES\n"+
"MBAGA1UEBwwJR3Vhbmd6aG91MQwwCgYDVQQKDANHWkMxCzAJBgNVBAsMAklUMQsw\n"+
"CQYDVQQDDAJDQTEhMB8GCSqGSIb3DQEJARYSYmVldmVuQGhvdG1haWwuY29tMIIB\n"+
"IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwAkNrr9lBSDG6bqnbK1WGllj\n"+
"E8ipVjY0GAYmqRFpldtdISxFjSYDSpoT5fofXNw5YffvU2lWSJ0hQ73YLpw5cWwv\n"+
"mMvFzwTV+ZhsF4aK6U7BPzsRibDtCPjFzTOpfrVAdpkYfNxg4KhNoSII/CT0M1J0\n"+
"d05jpMfnNANL64MDOsLC/U7hAsi/V3btjvtb7tHC7gnCJz4XecyaN6ciFh8w8Wpg\n"+
"a8U5qQOj6JQ8tt2ALle0OtCZ9xcqM8KkBIxG2mZA1UziGrrvfdFURsd/Fsavx5rH\n"+
"rf1dIXyiCm4wWeUY2+VzIc1rMeVQsh+BjWkwxzpk+nJ/SOPyMTtXIrnlOSE8WQID\n"+
"AQABo1AwTjAdBgNVHQ4EFgQUtFJswL4BCU955Ga3PGZ5ubBuso8wHwYDVR0jBBgw\n"+
"FoAUtFJswL4BCU955Ga3PGZ5ubBuso8wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0B\n"+
"AQsFAAOCAQEAeiDIl/IHpUmK8NI8AW+dS7OYA9R2ke5IRwKtcEh9HHG/Y8WC2n5e\n"+
"B12ZqlJEi/vK5dUzAeVHvrpl6L7Gb65TfxeeL/RppMK5yOB24N1CPsJ10lIxt+QF\n"+
"fFixECcFojl2/AwFf7lEIwGeNKVsOByni3qw+tWhDncD4JBTd2usOCYHZf90bQN4\n"+
"w+Oo0W5lMHWHT+DGwu575k6K3/nLxzPHYLLKofVxwt2ra6uvqQBbQq+hQNJ/8Myx\n"+
"J41OlbMrajDFqGkJXSH8nzzNHqzLydrvS+pL7gFMf5xtDs+ufqKKCawiuA58b1vn\n"+
"OgvUXEjwi7vaipA2uDYw5+dQvuBkTNaKww==" +
"\n-----END CERTIFICATE-----";

var goodCert = "-----BEGIN CERTIFICATE-----\n"+
"MIIDejCCAmICAQEwDQYJKoZIhvcNAQELBQAwgYAxCzAJBgNVBAYTAkNOMRIwEAYD\n"+
"VQQIDAlHdWFuZ2RvbmcxEjAQBgNVBAcMCUd1YW5nemhvdTEMMAoGA1UECgwDR1pD\n"+
"MQswCQYDVQQLDAJJVDELMAkGA1UEAwwCQ0ExITAfBgkqhkiG9w0BCQEWEmJlZXZl\n"+
"bkBob3RtYWlsLmNvbTAeFw0xNjAxMTEwNzA5MjRaFw0xNjAyMTAwNzA5MjRaMIGE\n"+
"MQswCQYDVQQGEwJDTjESMBAGA1UECAwJR3Vhbmdkb25nMRIwEAYDVQQHDAlHdWFu\n"+
"Z3pob3UxDDAKBgNVBAoMA0daQzELMAkGA1UECwwCSVQxDzANBgNVBAMMBlNlcnZl\n"+
"cjEhMB8GCSqGSIb3DQEJARYSYmVldmVuQGhvdG1haWwuY29tMIIBIjANBgkqhkiG\n"+
"9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuF5DGz5pCniKcOWpJGXiTrZz030ixko4ztFF\n"+
"LF+RIYyE78ux62UuTgWIJdVrriPutwNNkYqYBj5E+tEEjyOIx7C6qZGmRQp5Gp6E\n"+
"V9i2SipA/0Jr0CFN+M1hdOG8LyIxv/LNxoHQeT9pIGdKqGd5qrTQ4UiyeEb+Qzjb\n"+
"Dr73rFRAwQuClPGARcWQRWQ8x2PrcDPeF6IvqmvGu1v4v9PxEkkUzM322F7fCNoC\n"+
"aWl4u1A1ayq5dewm7LzNY5JVhqtTJaMacc2I9yntsf7bytx91soKO2+xFoNNSjbY\n"+
"xsCFUF0XEOTEyPZLFyx3qrXIQY79/Pi20n5bHZuBgTGsd5ESrwIDAQABMA0GCSqG\n"+
"SIb3DQEBCwUAA4IBAQAfHjiyC35/xJDD6SzwXn7wIYUq0xyCXuNnYPvmIUwOJibC\n"+
"7feMriVL8P/HWDjef8EX/cDEDgUnDTGcPYR3e3pO3idroFWFkNGgpHyUX1c+g3Xt\n"+
"21ShU0M1R6azEtJV9UN7W/xpBkuv9FJsYDof/7TK9g0uuXgsCK2501ln2jEXEB/+\n"+
"GB+bZMbLuzQkKQXIFqZz1SktYU+VyT+4OIvolBytfUhNUSztt7YcxuLVsXoiBzFh\n"+
"87g2I+8TEPDWyebSWoyWP70g/42zmNybel+SnjlYIjSM10HM4jJg4yQYu4xe/t4m\n"+
"bnpNaaue+EKc79B25yIJdxLIw03CcreT6ROArgnr"+
"\n-----END CERTIFICATE-----";

var badCert = "-----BEGIN CERTIFICATE-----\n"+
"MIIDejCCAmICAQEwDQYJKoZIhvcNAQELBQAwgYAxCzAJBgNVBAYTAkNOMRIwEAYD\n"+
"VQQIDAlHdWFuZ2RvbmcxEjAQBgNVBAcMCUd1YW5nemhvdTEMMAoGA1UECgwDR1pD\n"+
"MQswCQYDVQQLDAJJVDELMAkGA1UEAwwCQ0ExITAfBgkqhkiG9w0BCQEWEmJlZXZl\n"+
"bkBob3RtYWlsLmNvbTAeFw0xNjAxMTEwNzA5MjRaFw0xNjAyMTAwNzA5MjRaMIGE\n"+
"MQswCQYDVQQGEwJDTjESMBAGA1UECAwJR3Vhbmdkb25nMRIwEAYDVQQHDAlHdWFu\n"+
"Z3pob3UxDDAKBgNVBAoMA0daQzELMAkGA1UECwwCSVQxDzANBgNVBAMMBlNlcnZl\n"+
"cjEhMB8GCSqGSIb3DQEJARYSYmVldmVuQGhvdG1haWwuY29tMIIBIjANBgkqhkiG\n"+
"9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuF5DGz5pCniKcOWpJGXiTrZz030ixko4ztFF\n"+
"LF+RIYyE78ux62UuTgWIJdVrriPutwNNkYqYBj5E+tEEjyOIx7C6qZGmRQp5Gp6E\n"+
"V9i2SipA/0Jr0CFN+M1hdOG8LyIxv/LNxoHQeT9pIGdKqGd5qrTQ4UiyeEb+Qzjb\n"+
"Dr73rFRAwQuClPGARcWQRWQ8x2PrcDPeF6IvqmvGu1v4v9PxEkkUzM322F7fCNoC\n"+
"aWl4u1A1ayq5dewm7LzNY5JVhqtTJaMacc2I9yntsf7bytx91soKO2+xFoNNSjbY\n"+
"xsCFUF0XEOTEyPZLFyx3qrXIQY79/Pi20n5bHZuBgTGsd5ESrwIDAQABMA0GCSqG\n"+
"SIb3DQEBCwUAA4IBAQAfHjiyC35/xJDD6SzwXn7wIYUq0xyCXuNnYPvmIUwOJibC\n"+
"7feMriVL8P/HWDjef8EX/cDEDgUnDTGcPYR3e3pO3idroFWFkNGgpHyUX1c+g3Xt\n"+
"21ShU0M1R6azEtJV9UN7W/xpBkuv9FJsYDof/7TK9g0uuXgsCK2501ln2jEXEB/+\n"+
"GB+bZMbLuzQkKQXIFqZz1SktYU+VyT+4OIvolBytfUhNUSztt7YcxuLVsXoiBzFh\n"+
"87g2I+8TEPDWyebSWoyWP70g/42zmNybel+snjlYIjSM10HM4jJg4yQYu4xe/t4m\n"+
"bnpNaaue+EKc79B25yIJdxLIw03CcreT6ROArgnr"+
"\n-----END CERTIFICATE-----";

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
