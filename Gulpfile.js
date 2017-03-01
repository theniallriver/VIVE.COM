var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/**/*.scss',['styles']);
});