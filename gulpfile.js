var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	zip = require('gulp-zip'),
	clean = require('gulp-clean'),
	runSequence = require('run-sequence');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('zip', function(done) {
	runSequence('copy_for_zip', 'build_zip', 'clean_zip', done);
});
gulp.task('copy_for_zip', function () {
	return gulp.src(['**/*', '!node_modules/', '!node_modules/**', '!**/package.json','!**/gulpfile.js', '!**/package-lock.json'])
		.pipe(gulp.dest('dist'));
});
gulp.task('build_zip', function () {
	return gulp.src('dist/**/*')
		.pipe(zip('social-menu-icons.zip'))
		.pipe(gulp.dest('.'));
});

gulp.task('clean_zip', function () {
	return gulp.src('dist/social-menu-icons', { read: false }).pipe(clean())
});

gulp.task( 'sass', function() {
	return gulp.src('./css/sass/**/*.scss')
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({ 
			style: 'compressed',
			sourceComments: false
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css/'));
} );


gulp.task( 'watch', function() {
	
	// Watch SASS files
	gulp.watch( './css/sass/**/*.scss', [ 'sass' ] );
	
} );

gulp.task('default', function() {
  gulp.start( [ 'sass' ] );
});