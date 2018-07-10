const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const rsync = require('gulp-rsync');
const sync = require('browser-sync').create();
const svgmin = require('gulp-svgmin');
svgstore = require('gulp-svgstore');
const plumber = require('gulp-plumber');
const jsmin = require('gulp-jsmin');
const postcssPresetEnv = require('postcss-preset-env');
const imagemin = require("gulp-imagemin");
const webp = require('gulp-webp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

// svg sprite

gulp.task('svg', () => {
  return gulp.src('src/img/svg/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('dest/img'));
});

// HTML

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      removeComments: true
    }))
    .pipe(gulp.dest('dest'))
    .pipe(sync.stream({
      once: true
    }));
});

// CSS

gulp.task('css', () => {
  return gulp.src('src/styles/**/*.css')
    .pipe(plumber())
    .pipe(concat('style.css'))
    .pipe(postcss([postcssPresetEnv({
      stage: 0
      })
      ]))
    .pipe(postcss([autoprefixer]))
    .pipe(csso())
    .pipe(gulp.dest('dest/styles'))
    .pipe(sync.stream({
      once: true
    }));
});

// JS

gulp.task('scripts', () => {
  return gulp.src('src/scripts/*.js')
    .pipe(babel())
    .pipe(jsmin())
    .pipe(gulp.dest('dest/scripts'))
    .pipe(sync.stream({
      once: true
    }));
});

//libs

gulp.task('libs', () => {
  return gulp.src('src/scripts/libs/*.js')
    .pipe(jsmin())
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('dest/scripts'))
});

// Images

gulp.task('webp', function () {
  return gulp
    .src('src/img/**/*.{png,jpg}')
    .pipe(
      webp({
        quality: 90,
      })
    )
    .pipe(gulp.dest('dest/img'));
});

gulp.task('images', function () {
  return gulp
    .src('src/img/**/*.{png,jpg,gif}')
    .pipe(
      imagemin([
        imagemin.optipng({
          optimizationLevel: 3,
        }),
        imagemin.jpegtran({
          progressive: true,
        }),
      ])
    )
    .pipe(gulp.dest('dest/img'));
});

// Copy

gulp.task('copy', () => {
  return gulp.src([
      'src/fonts/*',
      'src/img/**/*.{jpg,png}',
      'src/img/svg/*.svg',
      '!src/styles/*',
      '!src/scripts/*',
      'src/scripts/libs/*',
      '!src/**/*.html',
      'src/portfolio/**/*',
    ], {
      base: 'src'
    })
    .pipe(gulp.dest('dest'))
    .pipe(sync.stream({
      once: true
    }));
});

// Server

gulp.task('server', () => {
  sync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: 'dest'
    }
  });
});

// Watch

gulp.task('watch:svg', () => {
  return gulp.watch('src/img/**/*.svg', gulp.series('svg'));
});

gulp.task('watch:html', () => {
  return gulp.watch('src/**/*.html', gulp.series('html'));
});

gulp.task('watch:css', () => {
  return gulp.watch('src/styles/**/*.css', gulp.series('css'));
});

gulp.task('watch:scripts', () => {
  return gulp.watch('src/scripts/*.js', gulp.series('scripts'));
});

gulp.task('watch:copy', () => {
  return gulp.watch([
    'src/*',
    'src/fonts/*',
    'src/img/**/*.{jpg,png,svg}',
    '!src/styles/*',
    '!src/scripts/*',
    '!src/**/*.html',
    'src/portfolio/*'
  ], gulp.series('copy'));
});

gulp.task('watch', gulp.parallel(
  'watch:svg',
  'watch:html',
  'watch:css',
  'watch:scripts',
  'watch:copy'
));

// Build

gulp.task('build', gulp.parallel(
  'svg',
  'images',
  'html',
  'css',
  'scripts',
  'copy'
));

// Default

gulp.task('default', gulp.series(
  'build',
  gulp.parallel(
    'watch',
    'server'
  )
));
