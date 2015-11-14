'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var mainBowerFiles = require('gulp-main-bower-files');
var changed = require('gulp-changed');
var del = require('del');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');

var options = {
  dist: 'www/',
  src: 'src/'
}

gulp.task('clean', function () {
  return del([options.dist + '**/*'], {force:true});
});

gulp.task('build:bower', () => {
  gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.dist + '/bower'));
});

gulp.task('build:js', () => {
  return gulp.src(options.src + '**/*.coffee', {base:options.src})
    .pipe(changed(options.dist))
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:css', () => {
  return gulp.src(options.src + '**/*.styl', {base:options.src})
    .pipe(changed(options.dist), {extension: '.css'})
    .pipe(sourcemaps.init())
    .pipe(stylus({'include css': true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:html', () => {
  return gulp.src(options.src + '**/*.jade', {base:options.src})
    .pipe(changed(options.dist), {extension: '.html'})
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:img', () => {
  return gulp.src(options.src + 'img/**/*', {base:options.src})
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build', ['build:bower', 'build:js', 'build:html', 'build:css', 'build:img']);

gulp.task('default', ['build']);
