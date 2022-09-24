var browserSync = require("browser-sync").create();
var gulp = require("gulp"),
  purge = require('gulp-css-purge'),
  uglify = require("gulp-uglify");
var runSequence = require("run-sequence");
var js_watch = [
  "./js/plugins.js",
  "./node_modules/@elioway/adon/js/adon/adonHideOnScrollDown.js",
  "./node_modules/@elioway/adon/js/adon/adonHighLink.js",
  "./node_modules/@elioway/adon/js/adon/adonNavScrollTo.js"
];
var css_watch = [
    "./eliosin/bushido/rei/dist/css/rei.min.css",
    "./eliosin/sins/sloth/dist/css/sloth.min.css",
];
var dist_js_folder = "./public/js/";
var dist_css_folder = "./public/css/";
var css_folder = "./css/";
gulp.task("deploy", function(cb) {
  runSequence("rei_deploy", "sloth_deploy", cb);
});
gulp.task("rei_deploy", function() {
  return gulp
    .src("./eliosin/bushido/rei/dist/css/rei.min.css")
    .pipe(purge({ trim: false }))
    .pipe(gulp.dest(css_folder))
    .pipe(gulp.dest(dist_css_folder))
    .pipe(browserSync.stream());
});
gulp.task("sloth_deploy", function() {
  return gulp
    .src("./eliosin/sins/sloth/dist/css/sloth.min.css")
    .pipe(purge({ trim: false }))
    .pipe(gulp.dest(css_folder))
    .pipe(gulp.dest(dist_css_folder))
    .pipe(browserSync.stream());
});
gulp.task("minify-adons", function() {
  gulp
    .src(js_watch)
    .pipe(gulp.dest(dist_js_folder))
    .pipe(browserSync.stream());
});
gulp.task("minify-main", function() {
  return gulp
    .src("./js/main.js")
    .pipe(gulp.dest(dist_js_folder))
    .pipe(browserSync.stream());
});
gulp.task("watch", ["deploy", "minify-adons", "minify-main"], function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch(css_watch, ["deploy"]);
  gulp.watch(js_watch, ["minify-adons"]);
  gulp.watch("./js/main.js", ["minify-main"]);
  gulp.watch(dist_css_folder).on("change", browserSync.reload);
  gulp.watch(js_watch).on("change", browserSync.reload);
  gulp.watch("./js/main.js").on("change", browserSync.reload);
  gulp
    .watch(["./eliosin/public/*.html", "*.html"])
    .on("change", browserSync.reload);
});
gulp.task("default", ["deploy", "minify-adons", "minify-main", "watch"]);
