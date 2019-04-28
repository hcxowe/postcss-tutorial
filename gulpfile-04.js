var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer') // 添加浏览器前缀
var customMedia = require('postcss-custom-media') // 媒体查询
var responsiveimages = require('postcss-responsive-images') // 响应式图片

gulp.task('autoprefixer', function() {
    return gulp.src('src/04/*.css')
            .pipe(postcss([autoprefixer, responsiveimages, customMedia()]))
            .pipe(gulp.dest('dest/04/'))
})

gulp.task('default', ['autoprefixer'])
gulp.watch('src/04/*.*', ['default'])