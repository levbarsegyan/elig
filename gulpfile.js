const { src, dest, watch, series, parallel } = require('gulp')
const concat = require('gulp-concat'),
 rename = require('gulp-rename'),
 uglify = require('gulp-uglify')
var browserSync = require('browser-sync').create()
const FILES = {
  scssWatch: [
    './node_modules/@elioway/bushido/rei/dist/css/*',
    './node_modules/@elioway/sins/sloth/dist/css/*'
  ],
  jsPath: [
    "./node_modules/@elioway/adon/js/adon/adonHideOnScrollDown.js",
    "./node_modules/@elioway/adon/js/adon/adonHighLink.js",
    "./node_modules/@elioway/adon/js/adon/adonNavScrollTo.js"
  ],
  alsoWatch: [
    "./node_modules/@elioway/bushido/rei/js/main.js",
    "./node_modules/@elioway/sins/sloth/js/main.js",
  ]
}
function taskRei() {
  return src('./node_modules/@elioway/bushido/rei/dist/css/*')
    .pipe(dest('public/css'))
}
function taskSloth() {
  return src('./node_modules/@elioway/sins/sloth/dist/css/*')
    .pipe(dest('public/css'))
}
function adonTask() {
  return src(FILES.jsPath)
    .pipe(concat('adons.js'))
    .pipe(uglify())
    .pipe(dest('public/js'))
    .pipe(browserSync.stream())
}
function jsTask() {
  return src(FILES.alsoWatch)
    .pipe(uglify())
    .pipe(dest('public/js'))
    .pipe(browserSync.stream())
}
const build = parallel(
  taskRei,
  taskSloth,
  adonTask,
  jsTask
)
function watchTask() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  watch(
    FILES.scssWatch.concat(FILES.alsoWatch).concat(FILES.jsPath),
    build,
  ).on('change', browserSync.reload)
}
exports.build = build
exports.default = series(
  build,
  watchTask
)
