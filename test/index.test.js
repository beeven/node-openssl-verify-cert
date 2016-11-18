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

var chainCACert = `-----BEGIN CERTIFICATE-----
MIIE0zCCA7ugAwIBAgIQGNrRniZ96LtKIVjNzGs7SjANBgkqhkiG9w0BAQUFADCB
yjELMAkGA1UEBhMCVVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYDVQQL
ExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTowOAYDVQQLEzEoYykgMjAwNiBWZXJp
U2lnbiwgSW5jLiAtIEZvciBhdXRob3JpemVkIHVzZSBvbmx5MUUwQwYDVQQDEzxW
ZXJpU2lnbiBDbGFzcyAzIFB1YmxpYyBQcmltYXJ5IENlcnRpZmljYXRpb24gQXV0
aG9yaXR5IC0gRzUwHhcNMDYxMTA4MDAwMDAwWhcNMzYwNzE2MjM1OTU5WjCByjEL
MAkGA1UEBhMCVVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYDVQQLExZW
ZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTowOAYDVQQLEzEoYykgMjAwNiBWZXJpU2ln
biwgSW5jLiAtIEZvciBhdXRob3JpemVkIHVzZSBvbmx5MUUwQwYDVQQDEzxWZXJp
U2lnbiBDbGFzcyAzIFB1YmxpYyBQcmltYXJ5IENlcnRpZmljYXRpb24gQXV0aG9y
aXR5IC0gRzUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCvJAgIKXo1
nmAMqudLO07cfLw8RRy7K+D+KQL5VwijZIUVJ/XxrcgxiV0i6CqqpkKzj/i5Vbex
t0uz/o9+B1fs70PbZmIVYc9gDaTY3vjgw2IIPVQT60nKWVSFJuUrjxuf6/WhkcIz
SdhDY2pSS9KP6HBRTdGJaXvHcPaz3BJ023tdS1bTlr8Vd6Gw9KIl8q8ckmcY5fQG
BO+QueQA5N06tRn/Arr0PO7gi+s3i+z016zy9vA9r911kTMZHRxAy3QkGSGT2RT+
rCpSx4/VBEnkjWNHiDxpg8v+R70rfk/Fla4OndTRQ8Bnc+MUCH7lP59zuDMKz10/
NIeWiu5T6CUVAgMBAAGjgbIwga8wDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8E
BAMCAQYwbQYIKwYBBQUHAQwEYTBfoV2gWzBZMFcwVRYJaW1hZ2UvZ2lmMCEwHzAH
BgUrDgMCGgQUj+XTGoasjY5rw8+AatRIGCx7GS4wJRYjaHR0cDovL2xvZ28udmVy
aXNpZ24uY29tL3ZzbG9nby5naWYwHQYDVR0OBBYEFH/TZafC3ey78DAJ80M5+gKv
MzEzMA0GCSqGSIb3DQEBBQUAA4IBAQCTJEowX2LP2BqYLz3q3JktvXf2pXkiOOzE
p6B4Eq1iDkVwZMXnl2YtmAl+X6/WzChl8gGqCBpH3vn5fJJaCGkgDdk+bW48DW7Y
5gaRQBi5+MHt39tBquCWIMnNZBU4gcmU7qKEKQsTb47bDN0lAtukixlE0kF6BWlK
WE9gyn6CagsCqiUXObXbf+eEZSqVir2G3l6BFoMtEMze/aiCKm0oHw0LxOXnGiYZ
4fQRbxC1lfznQgUy286dUV4otp6F01vvpX1FQHKOtw5rDgb7MzVIcbidJ4vEZV8N
hnacRHr2lVz2XTIIM6RUthg/aFzyQkqFOFSDX9HoLPKsEdao7WNq
-----END CERTIFICATE-----`;

var chainIntermediaryCert = `-----BEGIN CERTIFICATE-----
MIIFODCCBCCgAwIBAgIQUT+5dDhwtzRAQY0wkwaZ/zANBgkqhkiG9w0BAQsFADCB
yjELMAkGA1UEBhMCVVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYDVQQL
ExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTowOAYDVQQLEzEoYykgMjAwNiBWZXJp
U2lnbiwgSW5jLiAtIEZvciBhdXRob3JpemVkIHVzZSBvbmx5MUUwQwYDVQQDEzxW
ZXJpU2lnbiBDbGFzcyAzIFB1YmxpYyBQcmltYXJ5IENlcnRpZmljYXRpb24gQXV0
aG9yaXR5IC0gRzUwHhcNMTMxMDMxMDAwMDAwWhcNMjMxMDMwMjM1OTU5WjB+MQsw
CQYDVQQGEwJVUzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xHzAdBgNV
BAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsxLzAtBgNVBAMTJlN5bWFudGVjIENs
YXNzIDMgU2VjdXJlIFNlcnZlciBDQSAtIEc0MIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEAstgFyhx0LbUXVjnFSlIJluhL2AzxaJ+aQihiw6UwU35VEYJb
A3oNL+F5BMm0lncZgQGUWfm893qZJ4Itt4PdWid/sgN6nFMl6UgfRk/InSn4vnlW
9vf92Tpo2otLgjNBEsPIPMzWlnqEIRoiBAMnF4scaGGTDw5RgDMdtLXO637QYqzu
s3sBdO9pNevK1T2p7peYyo2qRA4lmUoVlqTObQJUHypqJuIGOmNIrLRM0XWTUP8T
L9ba4cYY9Z/JJV3zADreJk20KQnNDz0jbxZKgRb78oMQw7jW2FUyPfG9D72MUpVK
Fpd6UiFjdS8W+cRmvvW1Cdj/JwDNRHxvSz+w9wIDAQABo4IBYzCCAV8wEgYDVR0T
AQH/BAgwBgEB/wIBADAwBgNVHR8EKTAnMCWgI6Ahhh9odHRwOi8vczEuc3ltY2Iu
Y29tL3BjYTMtZzUuY3JsMA4GA1UdDwEB/wQEAwIBBjAvBggrBgEFBQcBAQQjMCEw
HwYIKwYBBQUHMAGGE2h0dHA6Ly9zMi5zeW1jYi5jb20wawYDVR0gBGQwYjBgBgpg
hkgBhvhFAQc2MFIwJgYIKwYBBQUHAgEWGmh0dHA6Ly93d3cuc3ltYXV0aC5jb20v
Y3BzMCgGCCsGAQUFBwICMBwaGmh0dHA6Ly93d3cuc3ltYXV0aC5jb20vcnBhMCkG
A1UdEQQiMCCkHjAcMRowGAYDVQQDExFTeW1hbnRlY1BLSS0xLTUzNDAdBgNVHQ4E
FgQUX2DPYZBV34RDFIpgKrL1evRDGO8wHwYDVR0jBBgwFoAUf9Nlp8Ld7LvwMAnz
Qzn6Aq8zMTMwDQYJKoZIhvcNAQELBQADggEBAF6UVkndji1l9cE2UbYD49qecxny
H1mrWH5sJgUs+oHXXCMXIiw3k/eG7IXmsKP9H+IyqEVv4dn7ua/ScKAyQmW/hP4W
Ko8/xabWo5N9Q+l0IZE1KPRj6S7t9/Vcf0uatSDpCr3gRRAMFJSaXaXjS5HoJJtG
QGX0InLNmfiIEfXzf+YzguaoxX7+0AjiJVgIcWjmzaLmFN5OUiQt/eV5E1PnXi8t
TRttQBVSK/eHiXgSgW7ZTaoteNTCLD0IX4eRnh8OsN4wUmSGiaqdZpwOdgyA8nTY
Kvi4Os7X1g8RvmurFPW9QaAiY4nxug9vKWNmLT+sjHLF+8fk1A/yO0+MKcc=
-----END CERTIFICATE-----`;

var chainServerCert = `-----BEGIN CERTIFICATE-----
MIIFfjCCBGagAwIBAgIQPyXKruWqg4+pHAUadfxxnTANBgkqhkiG9w0BAQsFADB+
MQswCQYDVQQGEwJVUzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xHzAd
BgNVBAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsxLzAtBgNVBAMTJlN5bWFudGVj
IENsYXNzIDMgU2VjdXJlIFNlcnZlciBDQSAtIEc0MB4XDTE2MTAwNzAwMDAwMFoX
DTE3MTAzMDIzNTk1OVowbTELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldhc2hpbmd0
b24xEDAOBgNVBAcMB1NlYXR0bGUxGTAXBgNVBAoMEEFtYXpvbi5jb20sIEluYy4x
HDAaBgNVBAMME2VjaG8tYXBpLmFtYXpvbi5jb20wggEiMA0GCSqGSIb3DQEBAQUA
A4IBDwAwggEKAoIBAQCcr7MGu5EDVOduBAbET5vheJNNnIOQbAnrTrwAaxdCaC32
VWELwJNMLjB1Hk1eixuhXr/rfCitAI2jjXZywFWNTLcfX9USz7kq/4CIA5S4qgF8
RTzMC8cJzsaY4pSA2J1wMDQxKnHdlMxIYZuR9ouKRHOd7qcVnqM06eSpO0YPpKsI
hiAs0CtJxig/MhxcTKkcWuiCfOtHgR7Rhx58ZnJLzVip6/+WWLTV0CBG+mcC3Lry
thObGQ2HNRIboghsUcjFckoARMCQaIolyBml8bbU6TkOTfIasRJj8gPk6fG8zGJd
KdfCG3wkPpt3Xm6LS08NrzkHSOlkuWipBl7bqhGjAgMBAAGjggIHMIICAzAeBgNV
HREEFzAVghNlY2hvLWFwaS5hbWF6b24uY29tMAkGA1UdEwQCMAAwDgYDVR0PAQH/
BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjBhBgNVHSAEWjBY
MFYGBmeBDAECAjBMMCMGCCsGAQUFBwIBFhdodHRwczovL2Quc3ltY2IuY29tL2Nw
czAlBggrBgEFBQcCAjAZDBdodHRwczovL2Quc3ltY2IuY29tL3JwYTAfBgNVHSME
GDAWgBRfYM9hkFXfhEMUimAqsvV69EMY7zArBgNVHR8EJDAiMCCgHqAchhpodHRw
Oi8vc3Muc3ltY2IuY29tL3NzLmNybDBXBggrBgEFBQcBAQRLMEkwHwYIKwYBBQUH
MAGGE2h0dHA6Ly9zcy5zeW1jZC5jb20wJgYIKwYBBQUHMAKGGmh0dHA6Ly9zcy5z
eW1jYi5jb20vc3MuY3J0MA8GAytlTQQIMAYCAQECAQEwgYsGCisGAQQB1nkCBAIE
fQR7AHkAdwCnzkpOYgfgrd7l/apLH4Z2h2e10AKlXUcxDn5nCpXqsgAAAVefqkBK
AAAEAwBIMEYCIQDKa3wGnBQLd06NZO2V1KWekjSeBKo8cbME8yx0vIV/gQIhAPoV
LPhVi6Coe1Fat1ItG+FyV0DhKAQjCd0nT+6l6ztiMA0GCSqGSIb3DQEBCwUAA4IB
AQB7hqbnqGsZJXk4AQi36tocJeKIq0YSARfcaoBjUyTIlxPHAgbvP+E8yl7f9DYB
lyy5ZliCatzWiw+zrn9WB9A21q6K+CTNltfxtNtY5xQ0MDHykrF+bu+DhyoP1YbM
DR2oWmd+SrTGVA6RMrW8VkRTPgOI+DCxtnV7fbiKuChG8Is7bc7H8kMZq36lb4ZZ
Ld3sRSLK8zHIuBpOVD+9v01mG1NLrlRkZduIpSW8gqe0En8K/0pVUlknpmoJBVdD
8QnjDZDKB00lgWbw5HLLfM2wdHredPcEDP7rmnjDSDhkxRBtVCVWyHSvdoAFpuyD
resu4y+Ob3GCo2J3XCv0Cvog
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

    it("should return 1 if a chain of certificates are valid", function(done) {
        var ca = chainIntermediaryCert + "\n" + chainCACert;
        plugin.verifyCert(chainServerCert, ca,function(err,ret) {
            should(err).be.Null();
            ret.should.equal(1);
            done();
        });
    });

    it("should return 0 if a chain of certificates are not valid", function(done) {
        // Missing the CA cert
        var ca = chainIntermediaryCert;
        plugin.verifyCert(chainServerCert, ca,function(err,ret) {
            ret.should.equal(0);
            err.should.not.be.Null();

            // Missing the intermediary cert
            ca = chainCACert;
            plugin.verifyCert(chainServerCert, ca,function(err,ret) {
                ret.should.equal(0);
                err.should.not.be.Null();
                done();
            });
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
