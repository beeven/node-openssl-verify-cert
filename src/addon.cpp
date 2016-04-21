#include <node.h>
#include <v8.h>
#include <nan.h>
#include <openssl/x509_vfy.h>
#include <openssl/pem.h>
#include <openssl/evp.h>
#include <iostream>

using namespace v8;



void VerifyCert(const Nan::FunctionCallbackInfo<v8::Value>& info) {

    if(info.Length() < 3) {
        Nan::ThrowTypeError("Wrong number of arguments");
        return;
    }

    if(!info[0]->IsString() || !info[1]->IsString() || !info[2]->IsFunction()) {
        Nan::ThrowTypeError("Wrong arguments type");
        return;
    }

    String::Utf8Value pem_cert(info[0]);
    String::Utf8Value pem_ca(info[1]);

    v8::Local<v8::Function> cb = info[2].As<v8::Function>();

    //OpenSSL_add_all_algorithms();
    EVP_add_digest(EVP_sha());
    EVP_add_digest(EVP_sha1());
    EVP_add_digest(EVP_sha224());
    EVP_add_digest(EVP_sha256());
    EVP_add_digest(EVP_sha384());
    EVP_add_digest(EVP_md4());
    EVP_add_digest(EVP_md5());
    EVP_add_digest(EVP_ripemd160());
    EVP_add_digest(EVP_mdc2());


    BIO *bio_cert = BIO_new(BIO_s_mem());
    BIO_puts(bio_cert, *pem_cert);
    X509 *cert = PEM_read_bio_X509(bio_cert,NULL,NULL,NULL);
    BIO *bio_ca = BIO_new(BIO_s_mem());
    BIO_puts(bio_ca, *pem_ca);
    X509 *ca = PEM_read_bio_X509(bio_ca,NULL,NULL,NULL);

    X509_STORE *store = X509_STORE_new();
    X509_STORE_add_cert(store,ca);



    X509_STORE_CTX *ctx = X509_STORE_CTX_new();
    X509_STORE_CTX_init(ctx,store,cert,NULL);

    int ret = X509_verify_cert(ctx);


    if(ret!= 1) {
        int err = X509_STORE_CTX_get_error(ctx);
        const char* errString = X509_verify_cert_error_string(err);

        v8::Local<v8::Value> argv[2] = { Nan::New(errString).ToLocalChecked(), Nan::New(0) };
        Nan::MakeCallback(Nan::GetCurrentContext()->Global(), cb, 2, argv);
    } else {
        v8::Local<v8::Value> argv[2] = { Nan::Null(), Nan::New(1) };
        Nan::MakeCallback(Nan::GetCurrentContext()->Global(), cb, 2, argv);
    }





    // std::cout << *pem_cert << std::endl
    //         << *pem_ca << std::endl;

    // int ret = verify_cert(*pem_cert, *pem_ca);
    // v8::Local<v8::Number> num = Nan::New(ret);
    //
    // info.GetReturnValue().Set(num);

    X509_STORE_CTX_free(ctx);
    X509_STORE_free(store);
    X509_free(ca);
    X509_free(cert);
    BIO_free_all(bio_cert);
    BIO_free_all(bio_ca);
    //EVP_cleanup();
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("verifyCert").ToLocalChecked(),
                Nan::New<v8::FunctionTemplate>(VerifyCert)->GetFunction());
}


NODE_MODULE(addon, Init);
