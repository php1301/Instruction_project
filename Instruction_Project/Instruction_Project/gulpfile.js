const gulp = require('gulp');
const bs = require('browser-sync').create();
const sass = require('gulp-sass');

//Complie sass & inject into Browser
gulp.task('sass',function(){
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss','node_modules/owl.carousel/src/scss/owl.carousel.scss','node_modules/owl.carousel/src/scss/owl.theme.default.scss'])
	.pipe(sass())
	.pipe(gulp.dest('src/css'))
	.pipe(bs.stream());
})
gulp.task('js',function(){
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist//umd/popper.min.js','node_modules/owl.carousel/dist/owl.carousel.min.js'])
	.pipe(gulp.dest('src/js'))
	.pipe(bs.stream());
});
gulp.task('serve',['sass'],function(){
	bs.init({
		server:'./src'
	})
	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass']);
	gulp.watch('src/css/*.css').on('change',bs.reload);
	gulp.watch('src/*.html').on('change',bs.reload);
});
gulp.task('fonts',function(){
	return gulp.src('node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest('src/fonts'));
});
gulp.task('fa',function(){
	return gulp.src('node_modules/font-awesome/css/font-awesome.css')
	.pipe(gulp.dest('src/css'));
});
gulp.task('default',['js','serve','fonts','fa']);