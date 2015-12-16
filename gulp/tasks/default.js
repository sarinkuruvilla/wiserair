var gulp = require('gulp');

gulp.task('default', ['html', 'sync', 'css', 'images'], function () {
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/scss/*.scss', ['css']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('html', function () {
    gulp.src([
      './index.html',
      './efficiency.html'
      ])
    .pipe(gulp.dest('./dist/'));
});
