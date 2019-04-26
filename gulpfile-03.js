var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer') // 添加浏览器前缀
var sourcemaps = require('gulp-sourcemaps') // 添加 sourcemap
var cssnano = require('cssnano') // 压缩
var rename = require('gulp-rename') // 重命名
var cssvariables = require('postcss-css-variables') // postcss的变量支持
var cssmixins = require('postcss-mixins') // postcss的mixin支持
var calc = require('postcss-calc') // 运算
var each = require('postcss-each')
var nesting = require('postcss-nesting')

gulp.task('autoprefixer', function() {
    return gulp.src('src/03/*.css')
            .pipe(postcss([autoprefixer, nesting(), cssvariables(), cssmixins(), calc(),  each()]))
            .pipe(gulp.dest('dest/03/'))
})

gulp.task('rename', function() {
    return gulp.src('dest/03/test.css')
            .pipe(postcss([cssnano]))
            .pipe(rename('test.min.css'))
            .pipe(gulp.dest('dest/03/'))
})

gulp.task('default', ['autoprefixer', 'rename'])
gulp.watch('src/03/*.*', ['default'])