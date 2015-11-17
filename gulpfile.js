var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    webpack = require('gulp-webpack'),
    config = require('./config');

gulp.task('build', function () {
    gulp.src(config.src)
        .pipe(webpack(config.webpack))
        // .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.js', ['build']);
});