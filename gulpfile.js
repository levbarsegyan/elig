var browserSync = require('browser-sync').create()
var gulp = require('gulp'),
  clean = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify')
var runSequence = require('run-sequence')
var css_folder = './css/'
var js_watch = [
  './js/plugins.js',
  './js/adon/adonHideOnScrollDown.js',
  './js/adon/adonNavScrollTo.js',
  './node_modules/@elioway/adon/js/adon/adonHighLink.js',
]
var sass_watch = ['./stylesheets*.scss']
var distro_css_files = [
  './css/normalize.css',
  './css/main.css',
  './css/sloth.css'
]
var dist_js_folder = './public/js/'
var dist_css_folder = './public/css/'
gulp.task('sass', function(cb) {
  runSequence('build_css', 'distribute_css', cb)
})
gulp.task('build_css', function() {
  return gulp
    .src('./stylesheets/judge.scss')
    .pipe(
      sass({
        includePaths: sass_watch
      })
    )
    .pipe(concat('sloth.css'))
    .pipe(gulp.dest(css_folder))
    .pipe(rename('sloth.min.css'))
    .pipe(clean())
    .pipe(gulp.dest(css_folder))
})
gulp.task('distribute_css', function() {
  return gulp
    .src(distro_css_files)
    .pipe(concat('sloth.min.css'))
    .pipe(clean())
    .pipe(gulp.dest(dist_css_folder))
    .pipe(browserSync.stream())
})
gulp.task('minify-js', function() {
  gulp
    .src(js_watch)
    .pipe(uglify())
    .pipe(concat('adons.js'))
    .pipe(gulp.dest(dist_js_folder))
    .pipe(browserSync.stream())
})
gulp.task('minify-main', function() {
  return gulp
    .src('./js/main.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dist_js_folder))
    .pipe(browserSync.stream())
})
gulp.task('watch', ['sass', 'minify-js', 'minify-main'], function() {
  browserSync.init({
    server: './public/'
  })
  gulp.watch(sass_watch, ['sass'])
  gulp.watch(js_watch, ['minify-js'])
  gulp.watch('./js/main.js', ['minify-main'])
  gulp.watch(sass_watch).on('change', browserSync.reload)
  gulp.watch(js_watch).on('change', browserSync.reload)
  gulp.watch('./js/main.js').on('change', browserSync.reload)
  gulp.watch(['**/*.html']).on('change', browserSync.reload)
})
gulp.task('default', ['sass', 'minify-js', 'minify-main', 'watch'])
