var gulp = require('gulp');
var shell = require('gulp-shell');
var fs = require('fs');

var npm_scripts = JSON.parse(fs.readFileSync('./package.json')).scripts;

// Import npm scripts in Gulp
for (var key in npm_scripts) {
  if (npm_scripts.hasOwnProperty(key)) {
    gulp.task(key, shell.task(npm_scripts[key]));
  }
}

// Add additional command for bumping files and release
