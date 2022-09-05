var browserSync = require('browser-sync').create()
var gulp = require('gulp'),
  uglify = require('gulp-uglify')
var runSequence = require('run-sequence')
var js_watch = [
  './js/plugins.js',
  './node_modules/@elioway/adon/js/adon/adonHideOnScrollDown.js',
  './node_modules/@elioway/adon/js/adon/adonHighLink.js',
  './node_modules/@elioway/adon/js/adon/adonNavScrollTo.js'
]
var css_watch = ['./node_modules/@elioway/bushido/rei/css/rei.min.css', './node_modules/@elioway/sins/sloth/css/sloth.min.css'']
var js_folder = './js/'
var css_folder = './css/'
var dist_js_folder = './public/js/'
var dist_css_folder = './public/css/'
gulp.task('deploy', function(cb) {
  runSequence('rei', 'sloth', 'rei_deploy', 'sloth_deploy', cb)
})
gulp.task('rei', function() {
  return gulp
    .src('./node_modules/@elioway/bushido/rei/css/rei.min.css')
    .pipe(gulp.dest(css_folder))
})
gulp.task('sloth', function() {
  return gulp
    .src('./node_modules/@elioway/sins/sloth/css/sloth.min.css')
    .pipe(gulp.dest(css_folder))
})
gulp.task('rei_deploy', function() {
  return gulp
    .src('./node_modules/@elioway/bushido/rei/css/rei.min.css')
    .pipe(gulp.dest(dist_css_folder))
})
gulp.task('sloth_deploy', function() {
  return gulp
    .src('./node_modules/@elioway/sins/sloth/css/sloth.min.css')
    .pipe(gulp.dest(dist_css_folder))
})
gulp.task('distribute_css', function() {
  return gulp
    .src(distro_css_files)
    .pipe(concat('sloth.min.css'))
    .pipe(clean())
    .pipe(gulp.dest(dist_css_folder))
    .pipe(browserSync.stream())
})
gulp.task('minify-adons', function() {
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
gulp.task('watch', ['deploy', 'minify-adons', 'minify-main'], function() {
  browserSync.init({
    server: './'
  })
  gulp.watch(css_watch, ['rei', 'sloth'])
  gulp.watch(js_watch, ['minify-adons'])
  gulp.watch('./js/main.js', ['minify-main'])
  gulp.watch(css_watch).on('change', browserSync.reload)
  gulp.watch(js_watch).on('change', browserSync.reload)
  gulp.watch('./js/main.js').on('change', browserSync.reload)
  gulp.watch(['**/public*.html']).on('change', browserSync.reload)
})
gulp.task('default', ['deploy', 'minify-adons', 'minify-main', 'watch'])
