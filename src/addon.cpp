#include <node.h>
#include <v8.h>
#include <nan.h>
#include <openssl/x509_vfy.h>
#include <openssl/pem.h>
#include <iostream>

using namespace v8;

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

    std::cout << *pem_cert << std::endl
            << *pem_ca << std::endl;


    v8::Local<v8::Number> ret = Nan::New(1);

    info.GetReturnValue().Set(ret);
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("verifyCert").ToLocalChecked(),
                Nan::New<v8::FunctionTemplate>(VerifyCert)->GetFunction());
}


NODE_MODULE(addon, Init);
