var gulp = require('gulp')

var assetPaths = {
	"js": {
		"src" : './static/assets/js/main.js',
		"dst" : './static/assets/js/'
	},
	"sass": {
		"src" : './static/assets/sass/main.sass',
		"dst" : './static/assets/css/'
	}
}

function compile_js(isUglify, isWatch){
	var uglify     = require('gulp-uglify')
	var gulpif     = require('gulp-if')
	var browserify = require('browserify')
	var watchify   = require('watchify')
	var source     = require('vinyl-source-stream')
	var buffer     = require('vinyl-buffer')

	var bundler

	if (isWatch) {
		bundler = watchify(browserify(assetPaths.js.src))
	} else {
		bundler = browserify(assetPaths.js.src)
	}

	function bundle(){
		return bundler
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulpif(isUglify, uglify()))
		.pipe(gulp.dest(assetPaths.js.dst));
	}

	bundler.on('update', function(){
		bundle()
		console.log('Browserify fired...');
	})

	return bundle()
}

function copy_assets(){
	var path       = require('path');
	var rename     = require('gulp-rename');

	// Copy Fonts for font-awesome
	gulp.src('./node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest('./static/assets/fonts/font-awesome'))

	// Copy Fonts for bootstrap
	gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
	.pipe(gulp.dest('./static/assets/fonts/bootstrap'))

	// Copy highlight.js style CSS files as SCSS
	gulp.src('./node_modules/highlight.js/styles/*')
	.pipe(rename(function(path){
		path.extname = ".scss"
	}))
	.pipe(gulp.dest('./static/assets/sass/highlight.js/'))
}

function compass(isUglify){
	var gulpif     = require('gulp-if')
	var compass    = require('gulp-compass');
	var path       = require('path');
	var minifyCss  = require('gulp-minify-css');

	return gulp.src(assetPaths.sass.src)
	.pipe(compass({
		project: path.join(__dirname, './static/assets'),
		config_file: './config.rb'
	}))
	.pipe(gulpif(isUglify, minifyCss()))
	.pipe(gulp.dest('css'));
}

function compile_css(isUglify, isWatch){
	if(isWatch){
		gulp.watch(assetPaths.sass.src, function(){
			console.log("Compiling SASS...")
			return compass(isUglify)
		})
	}else{
		return compass(isUglify)
	}
}

gulp.task('js:compile', function() {
	return compile_js(true, false)
});

gulp.task('js:watch', function () {
	return compile_js(false, true)
});

gulp.task('sass:compile', function(){
	return compile_css(true, false)
})

gulp.task('sass:watch', function () {
	return compile_css(false, true)
});

gulp.task('sass:copy', function () {
	return copy_assets()
});

gulp.task('default', ['sass:copy', 'sass:compile', 'js:compile']);

