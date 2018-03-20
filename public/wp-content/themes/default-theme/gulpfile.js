//Incluindo os módulos necessários.
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');


   //Configurando o BrowserSync.
    gulp.task('browser-sync', function () {
        var files = [
            './style.css',
            './*.php',
            './js/*.js'

        ];

        //Iniciando BrowserSync com o PHP
        browserSync.init(files, {
            proxy: "http://cegas.mambo/"
        });
    });

    //Configurando o sass
    gulp.task('sass', function () {
        return gulp.src('assets/sass/*.scss')
            .pipe(sass({
                    'outputStyle' : 'compressed'
                }))
            .pipe(gulp.dest('./'))
            .pipe(browserSync.stream())
    });

    //Otimizando images
    gulp.task('img', function() {
        gulp.src('assets/images/*.{png,jpg,gif}')
            .pipe(imagemin({

                optimizationLevel: 7,
                progressive: true

            }))
            .pipe(gulp.dest('img'))
    });

    //Creat a default task that can be called using 'gulp.
    //The task will process sass, run browser-sync and start watching for changes.

    gulp.task('default', ['sass', 'browser-sync', 'img'], function () {
        gulp.watch("assets/sass/**/*.scss", ['sass']);
    })