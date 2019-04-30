var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer') // 添加浏览器前缀
var customMedia = require('postcss-custom-media') // 媒体查询
var responsiveimages = require('postcss-responsive-images') // 响应式图片
var assets = require('postcss-assets')
var sprites = require('postcss-sprites')

gulp.task('assets', function() {
    return gulp.src('src/05/*.css')
            .pipe(postcss([assets({
                loadPaths: ['src/05/img/', 'src/05/fonts/'],
                relativeTo: 'dest/'
            }), sprites({
                stylesheetPath: 'dest/',
                spritePath    : 'src/05/img/sprite.png',
                path          : 'src/05/img/'
            })]))
            .pipe(gulp.dest('dest/05/'))
})

gulp.task('default', ['assets'])
gulp.watch('src/04/*.*', ['default'])