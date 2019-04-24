var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer') // 添加浏览器前缀
var sourcemaps = require('gulp-sourcemaps') // 添加 sourcemap
var cssnano = require('cssnano') // 压缩
var rename = require('gulp-rename') // 重命名

gulp.task('styles', function() {
    return gulp.src('src/01/*.css')
            .pipe(postcss([autoprefixer]))
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('maps/01/'))
            .pipe(gulp.dest('dest/01/'))
})

gulp.task('rename', ['styles'], function() {
    return gulp.src('dest/01/test.css')
            .pipe(postcss([cssnano]))
            .pipe(rename('test.min.css'))
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('maps/01/'))
            .pipe(gulp.dest('dest/01/'))
})

gulp.task('default', ['styles', 'rename'])
gulp.watch('src/01/*.*', ['default'])