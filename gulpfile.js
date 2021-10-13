const gulp = require("gulp");
const pug = require("gulp-pug");
const fs = require("fs");

function compilePug() {
  return gulp
    .src("./source/pug/**/!(_)*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./"));
}

function watchPug() {
  gulp.watch(["source/pug/**/*.pug"], { ignoreInitial: false }, compilePug);
}

exports.compilePug = compilePug;
exports.watchPug = watchPug;
