var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



// Pug
gulp.task('default', function() {

	return gulp.src('./src/*.html')
		.pipe(browserSync.reload({
			stream: true
		}))

});


// Sass
gulp.task('sass', function() {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});



// Browser Sync
gulp.task('browserSync', function() {

	browserSync.init({
		server: {
			baseDir: './src/'
		},
	});

});



// Watch Gulp
gulp.task('watch', ['browserSync'], function() {

	gulp.watch('./src/*.html', ['default']);
	gulp.watch('./src/sass/*.scss', ['sass']);


});