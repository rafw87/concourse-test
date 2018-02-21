var fs = require('fs-extra');

fs.copy('.', 'dist', /^(?!(.*(\.git|dist$|node_modules$|build\.js$)))/ , function (err) {
  if (err) {
    throw err;
  }
  console.log('Build finished. All source files copied successfully.');
});