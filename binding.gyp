{
	"variables":{
		'node_shared_openssl%':'true'
	},
	"targets":[
		{
			"target_name":"addon",
			"product_extension":"node",
			"type":"shared_library",
			"include_dirs":["<!(node -e \"require('nan')\")"],
			"sources": [
				"src/addon.cpp"
			],
			"conditions": [
				[ 'node_shared_openssl=="false"', {
					'include_dirs': [
						'<(node_root_dir)/deps/openssl/openssl/include'
					],
					"conditions":[
						["target_arch=='ia32'",{
							"include_dirs": [ "<(node_root_dir)/deps/openssl/config/piii"]
						}],
						["target_arch=='x64'", {
              				"include_dirs": [ "<(node_root_dir)/deps/openssl/config/k8" ]
            			}],
            			["target_arch=='arm'", {
              				"include_dirs": [ "<(node_root_dir)/deps/openssl/config/arm" ]
            			}]
					]
				}],
				[ 'OS=="win"', {
				    'conditions': [
				        # "openssl_root" is the directory on Windows of the OpenSSL files.
				        # Check the "target_arch" variable to set good default values for
				        # both 64-bit and 32-bit builds of the module.
				    	['target_arch=="x64"', {
					        'variables': {
					            'openssl_root%': 'C:/OpenSSL-Win64'
					        },
				        }, {
			  	            'variables': {
					            'openssl_root%': 'C:/OpenSSL-Win32'
					        },
					    }],
				    ],
				    'libraries': [
				        '-l<(openssl_root)/lib/libeay32.lib',
				    ],
				    'include_dirs': [
				        '<(openssl_root)/include',
				    ],
				}],
				[ 'OS=="mac"', {
					'include_dirs': [
						'/usr/local/opt/openssl/include',
					],
					'libraries': [
						'-L/usr/local/opt/openssl/lib',
						#'-lssl',
						#'-lcrypto',
					],
					'xcode_settings': {
						'OTHER_CPLUSPLUSFLAGS': ['-std=c++11', '-stdlib=libc++'],
						# node-gyp 2.x doesn't add this any more
						# https://github.com/TooTallNate/node-gyp/pull/612
						'OTHER_LDFLAGS':['-undefined dynamic_lookup'],
						'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
						'MACOSX_DEPLOYMENT_TARGET': '10.9'
					}
				}]
			]
		}
	]
}
