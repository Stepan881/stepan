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
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");


const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

  gulp.task("del", function () {
    return del("app/");
  });

  gulp.task("js", function () {
    return gulp.src('source/scripts/**/*')
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('app/js/'))
  });

  gulp.task("css", function () {
    return gulp.src("source/scss/style.scss")
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest("source/css"))
      .pipe(csso())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("app/css"))
      .pipe(server.stream());
  });

  gulp.task("html", function () {
    return gulp.src("source/*.html")
      .pipe(gulp.dest("app"));
      
  });

  gulp.task("db", function () {
    return gulp.src("source/db/")
      .pipe(gulp.dest("app/"));
      
  });

  gulp.task("img", function () {
    return gulp.src("source/img/**/*.{jpg,svg,png}")   
      .pipe(gulp.dest("app/img"));
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
    gulp.watch("source/scss/**/*.{scss,sass}", gulp.series("css", "refresh"));
    gulp.watch("source/img/**/*", gulp.series("img", "refresh"));
    gulp.watch("source/*.html", gulp.series("html", "refresh"));
    gulp.watch("source/scripts/**/*", gulp.series("js", "refresh"));
    gulp.watch("source/db/**/*", gulp.series("db", "refresh"));
  });

  gulp.task("refresh", function(done) {
    server.reload();
    done();
  });

  gulp.task("copy", function () {
    return gulp.src([
      "source/fonts/**/*.{woff, woff2}",
      "source/img/**",
      "source/db/**",
      "source/*.{png, xml, webmanifest, ico}",
    ], {
      base: "source"
    })
    .pipe(gulp.dest("app"));
  });

  gulp.task("webp", function () {
    return gulp.src("source/img/**/*.{jpg,jpeg,svg}")
      .pipe(webp({quality: 50}))
      .pipe(gulp.dest("app/img"));
  });

gulp.task("build", gulp.series("del", "copy", "img", "webp", "css", "js", "html"));
gulp.task("start", gulp.series("build", "server"));