var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

//----------------------------
//BrowserSync.
//----------------------------
gulp.task('browser-sync', function () {
    var files = [
        './style.css',
        './*.php',
        './js/*.js'
    ];

    //BrowserSync Proxy
    browserSync.init(files, {
        proxy: "http://nomedoprojeto.test/"
    });
});

//----------------------------
//Sass
//----------------------------
gulp.task('sass', function () {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass({
            'outputStyle': 'compressed'
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream())
});

//----------------------------
//Optimizing images
//----------------------------
gulp.task('img', function () {
    gulp.src('assets/images/*.{png,jpg,gif}')
        .pipe(imagemin({
            optimizationLevel: 7,
            progressive: true
        }))
        .pipe(gulp.dest('img'))
});

//----------------------------
//Default task that can be called using 'gulp.
//----------------------------
gulp.task('default', ['sass', 'browser-sync', 'img'], function () {
    gulp.watch("assets/sass/**/*.scss", ['sass']);
});