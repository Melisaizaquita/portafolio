const gulp = require("gulp");
const pug = require("gulp-pug");
const fs = require("fs");


function compileJs() {
	return gulp.src("source/js/*.js").pipe(uglify()).pipe(gulp.dest("build/js"));
}

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

function watchJs() {
	gulp.watch(["source/js/**/*.js"], { ignoreInitial: false }, compileJs);
}


exports.compilePug = compilePug;
exports.watchPug = watchPug;
exports.watchJs = watchJs;
