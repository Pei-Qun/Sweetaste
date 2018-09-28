const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const mainBowerFiles = require('main-bower-files');
const minimist = require('minimist'); // 用來讀取指令轉成變數

gulp.task('bower', function () {
  return gulp.src(([
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.bundle.min.js',
    './bower_components/jquery-easing/jquery.easing.min.js',
    './bower_components/scrollreveal/dist/scrollreveal.min.js'
  ]))
    .pipe(gulp.dest('./vendors/'));
  cb(err);
});
gulp.task('default', ['bower']);