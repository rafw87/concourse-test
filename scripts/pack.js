const targz = require('targz');
const gitDescribe = require('git-describe');
const fs = require('fs-extra');

let match = "v*";

let describe = gitDescribe.gitDescribeSync({match});

fs.ensureDir('out');

targz.compress({
  src: 'dist',
  dest: `out/test-project-${describe.semverString}.tar.gz`
}, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("Done!");
  }
});