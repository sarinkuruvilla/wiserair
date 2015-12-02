var gulp = require('gulp'),
    browserify  = require('browserify'),
    shim  = require('browserify-shim'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    streamify = require('gulp-streamify'),
    watchify = require('watchify'),
    util = require('../util'),
    sync = require('browser-sync');
    concat = require('gulp-concat');

gulp.task('js', function() {

    // gulp.src([
    //     './bower_components/wow/dist/wow.js',
    //     './bower_components/onepage-scroll/jquery.onepage-scroll.js',
    // ])
    //     .pipe(gulp.dest('./dist/js'))


    gulp.src([
            './bower_components/jquery/jquery.js',
            './bower_components/wow/dist/wow.js',
            './bower_components/onepage-scroll/jquery.onepage-scroll.js'
        ])
        .pipe(concat('vendor.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))


    var bundler = watchify('./src/js/main');
    bundler.transform('debowerify');
    bundler.on('update', rebundle);
    
    function rebundle() {

        return bundler

        // Enable source maps
        .bundle({debug: true})

        // Report compile erros
        .on('error', util.handleErros)
    
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.
        .pipe(source('main.js'))
        //.pipe(streamify(uglify()))

        // Specify the output destination
        .pipe(gulp.dest('./dist/js/'))

        // Reload the browser-sync
        .pipe(sync.reload({stream:true}));

    }
    
    return rebundle();

});
