import * as ffi from 'ffi';
// import * as path from 'path';

var lib = ffi.Library(path.join(__dirname, '../target/release/libembed'), {
    fibonacci: ['int', ['int']]
  });


