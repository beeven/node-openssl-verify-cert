var should = require("should");

describe("Index", function() {
    var ca = `-----BEGIN CERTIFICATE-----
MIIDBjCCAe4CCQDVX8KnHXeMQzANBgkqhkiG9w0BAQsFADBFMQswCQYDVQQGEwJB
VTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50ZXJuZXQgV2lkZ2l0
cyBQdHkgTHRkMB4XDTE2MDQxMjA4NDgwMVoXDTE5MDQxMjA4NDgwMVowRTELMAkG
A1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUxITAfBgNVBAoMGEludGVybmV0
IFdpZGdpdHMgUHR5IEx0ZDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
ANcYbMMKThh9D9LqGp4Wc3AnzRpB3+l1yBgbYSWpSKVnAdJOQYUU0lvtFpdmN2LZ
L5HCDb8mNt3zy5zu9YYsjCVUJDEAxwzF0PRU/xh+1ZQULsDzt+ZUr8sQgo1p05p4
OJPsliDvdXWufqobg8AizbdTwc8kNY/CrTlUX8TqaN9RERMjzlqd/zjt1s39YzDB
irplV2h6oBFlCVuIx8J+kijwUwHyfr8QWiI9G2C5Yirlpm1HjjZsUWi+iuYW8+10
we/VkeD34PoTtE3oMUztulheOdFLBXr8ZPB2VyYf2IrKCj5qYax4X2o5KwfT4uws
dM+XwHv82DQLINLNWdg4G4UCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAFLEPd7qt
WD3xoZOVQfzq+wQJTslvGzLbTI1w9/k3YgoNbt1hDoKayymCxU8vXZHoPPTPweuk
mbDh2JdhaeCIvOID2zpjmuNSP+EtotFWFAYNuWsbPnzf6enVLpRFdThOdob8VBVb
B6ZYvz00jMqxgphdZ2DJ3kApJO4N+Kppye5cMpeoJw/Y5h73+hDTcm2VUoK6cvyU
n9xmLvSS1Y06KaObjWpve7vFMNNpGhQRh0DDm1vRQP7PmcWv5gymI1yyfYFZhDXp
4rQ4IJTe136mZxmpqw2QbJmn7cmJ63pMf0PGDkzIbvsvxXU4cezLsIJdAcTgbDKo
mhK12g6J1YvwEQ==
-----END CERTIFICATE-----`;

var goodCert = `-----BEGIN CERTIFICATE-----
MIIC5zCCAc8CAQEwDQYJKoZIhvcNAQELBQAwRTELMAkGA1UEBhMCQVUxEzARBgNV
BAgMClNvbWUtU3RhdGUxITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0
ZDAeFw0xNjA0MTIwODQ5MTVaFw0xOTA0MTIwODQ5MTVaMC4xCzAJBgNVBAYTAkFV
MRMwEQYDVQQIDApTb21lLVN0YXRlMQowCAYDVQQKDAEyMIIBIjANBgkqhkiG9w0B
AQEFAAOCAQ8AMIIBCgKCAQEAsmkLwofGWrVak6S9htn67pXNsz4GMoefPxUTudNv
DhXrCewXjTa+YfW//FNxX1dhnY3jCqxPeiGGXcr/cPvhi5Mud4YytTJubFoFNRz1
oV2PsXcmspYSSMaf/+fF15sxli9FtIJHnn4nVkNo5rVLTpVsauTSwvVY/rkRlTSR
h8Nu9HpqdBgKH1e7/Yz8sQMmsBbpSx6cwAUjw9csaSkON2wo4Dq68t/ssZ6XxUKy
Cv97z3wCLz7jMIWJQR1sr4GVmZ06W/0oqn33MknCft9o0be8Cg4Wx1Uz17dvbnqJ
TvTqphhz0htfuspLeyyY4hEhuQ49NUleRsl00kb7fax4DwIDAQABMA0GCSqGSIb3
DQEBCwUAA4IBAQC6HZVKVqa6m1ykL9lS1nHhU3R4vswEsK1+vz+wLiU+7JXnD3LD
Gd3IpzHPAxqD5I26AZtOBvU2Qj2euEqzMtaSG8SCJFwZLYpWHZqrGDDtHCBjjkap
aVaBJT6Y4W8BGCXZ5rDEIhfW54/a2GVlRnrBtxWWFWQNgRIJ6QTrSPwwPGaGk7J4
QKmWhmmNOCj43aR9ck0+2I9RKWGCwez/E4mVkQ5ddGaB6YM4hogn2WbF7TnK8Bpw
4/NT2xPsLQOjDzh/4N8VldzXdlDnhK/306GRVh9LFu5oQVX4ZoNUKpH35kywxYeU
QNbAJ+IYhrQsdUoyOfOTUmKiXOKjG+5fMwbV
-----END CERTIFICATE-----`

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
