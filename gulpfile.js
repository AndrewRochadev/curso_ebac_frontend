const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('src/images/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('build/style'));
});

gulp.task('imagemin', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
});

gulp.task('uglify', function () {
    return gulp.src('src/script/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));