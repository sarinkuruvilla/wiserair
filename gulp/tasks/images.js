var gulp = require('gulp'),
    sync = require('browser-sync'),
    util = require('../util');

gulp.task('images', function () {

  gulp.src('./src/images')
        // Report compile erros
        .on('error', util.handleErros)
        // Specify the output destination
        .pipe(gulp.dest('./dist'))

        // Reload the browser-sync
        .pipe(sync.reload({stream:true}));
});