"use strict";

var gulp = require('gulp');

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest;

var pug = require('gulp-pug');

var sas = require('gulp-sass');

var reload = require('gulp-livereload-for-was');

var notify = require('gulp-notify');

gulp.task('html', function () {
  return gulp.src('main/index.pug').pipe(pug({})).pipe(dest('dist')).pipe(notify("init html files is done")).pipe(reload());
});
gulp.task("style", function () {
  return gulp.src("style/style.scss").pipe(sas({
    outputStyle: 'compressed'
  })).pipe(dest("dist/style")).pipe(notify("init css files is done")).pipe(reload());
});
gulp.task("js", function () {
  return gulp.src("js/index.js").pipe(dest("dist/js")).pipe(notify("init js files is done")).pipe(reload());
});
gulp.task('watch', function () {
  notify("gulp is rinning");

  var server = require("./server");

  gulp.watch('main/*.pug', gulp.series('html'));
  gulp.watch('style/*.scss', gulp.series('style'));
  gulp.watch('js/*.js', gulp.series('js'));
  reload.listen();
}); // Default Task

gulp.task('default', gulp.parallel('watch'));