#include <node.h>
#include <v8.h>
#include <nan.h>
#include <openssl/x509_vfy.h>
#include <openssl/pem.h>
#include <openssl/evp.h>
#include <iostream>

using namespace v8;


// TODO: return error message;

int verify_cert(const char* pem_cert, const char* pem_ca) {
    EVP_add_digest(EVP_sha1());
    EVP_add_digest(EVP_sha256());

    BIO *bio_cert = BIO_new(BIO_s_mem());
    BIO_puts(bio_cert,pem_cert);
    X509 *cert = PEM_read_bio_X509(bio_cert,NULL,NULL,NULL);
    BIO *bio_ca = BIO_new(BIO_s_mem());
    BIO_puts(bio_ca,pem_ca);
    X509 *ca = PEM_read_bio_X509(bio_ca,NULL,NULL,NULL);

    X509_STORE *store = X509_STORE_new();
    X509_STORE_add_cert(store,ca);

    X509_STORE_CTX *ctx = X509_STORE_CTX_new();
    X509_STORE_CTX_init(ctx,store,cert,NULL);

    int ret = X509_verify_cert(ctx);

    X509_STORE_CTX_free(ctx);
    X509_STORE_free(store);
    X509_free(ca);
    X509_free(cert);
    BIO_free_all(bio_cert);
    BIO_free_all(bio_ca);
    EVP_cleanup();

    return ret;
}


void VerifyCert(const Nan::FunctionCallbackInfo<v8::Value>& info) {

    if(info.Length() < 2) {
        Nan::ThrowTypeError("Wrong number of arguments");
        return;
    }

    if(!info[0]->IsString() || !info[1]->IsString()) {
        Nan::ThrowTypeError("Wrong arguments type");
        return;
    }

    String::Utf8Value pem_cert(info[0]);
    String::Utf8Value pem_ca(info[1]);



    // std::cout << *pem_cert << std::endl
    //         << *pem_ca << std::endl;

    int ret = verify_cert(*pem_cert, *pem_ca);
    v8::Local<v8::Number> num = Nan::New(ret);

    info.GetReturnValue().Set(num);
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("verifyCert").ToLocalChecked(),
                Nan::New<v8::FunctionTemplate>(VerifyCert)->GetFunction());
}


NODE_MODULE(addon, Init);
