"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const server = require("browser-sync").create();
const del = require("del");

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

  gulp.task("del", function () {
    return del("app/css");
  });

  gulp.task("js", function () {
    return gulp.src('scripts/**/*')
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('app/js/'))
  });

  gulp.task("css", function () {
    return gulp.src("app/scss/style.scss")
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest("app/css"))
      .pipe(csso())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("app/css"))
      .pipe(server.stream());
  });

  gulp.task("html", function () {
    return gulp.src("app/*.html");
      
  });

  gulp.task("img", function () {
    return gulp.src("app/img/**/*");
  });

  gulp.task("server", function () {
    server.init({
      server: "app/",
      notify: false,
      open: true,
      cors: true,
      ui: false,
      tunnel: false
    });
    gulp.watch("app/scss/**/*.{scss,sass}", gulp.series("css", "refresh"));
    gulp.watch("app/img/**/*", gulp.series("img", "refresh"));
    gulp.watch("app/*.html", gulp.series("html", "refresh"));
    gulp.watch("scripts/**/*", gulp.series("js", "refresh"));
  });

  gulp.task("refresh", function(done) {
    server.reload();
    done();
  });

gulp.task("build", gulp.series("del", "css", "js"));
gulp.task("start", gulp.series("build", "server"));