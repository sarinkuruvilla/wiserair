var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sync = require('browser-sync'),
    util = require('../util'),
    concat = require('gulp-concat-css'),
    debug = require('gulp-debug');

gulp.task('css', function () {  

    gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['scss']
        }))
        // Report compile erros
        .on('error', util.handleErros)
        .pipe(debug({title: 'unicorn:'}))
        // Specify the output destination
        .pipe(gulp.dest('./dist/css'))

        // Reload the browser-sync
        .pipe(sync.reload({stream:true}));

    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/animate.css/animate.min.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/css'))

});

