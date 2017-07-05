//引入gulp组件
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
//压缩html
var htmlmin = require('gulp-htmlmin');

gulp.task('html',function(){
	gulp.src('src/**/*.html')
	.pipe(htmlmin({
		collapseWhitespace:true,
		removeComments:true
	}))
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({stream:true}))
})

//less文件编译、压缩
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('less',function(){
	gulp.src(['src/less/**/*.less','!src/less/_*.less'])
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({stream:true}))
})
// 压缩img
gulp.task('testImagemin', function () {
    gulp.src('src/images/**/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({stream:true}))
});

//js压缩、合并
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js',function(){
	gulp.src(['src/js/**/*.js','node_modules/jquery/dist/jquery.min.js'])
	// .pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream:true}))
})

//监视所有的文件

gulp.task('watch',function(){
	gulp.watch('src/**/*.html',['html']);
	gulp.watch('src/less/**/*.less',['less']);
	gulp.watch('src/js/**/*.js',['js']);
})

//启动一个web服务，用于同步测试
var browserSync = require('browser-sync');

gulp.task('server',['html','less','js','testImagemin'],function(){
	browserSync.init({
		server:{
			baseDir:'./dist/'
		}
	})
})

//定义默认任务，去启动watch和server任务
gulp.task('default',['watch','server']);