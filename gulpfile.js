
/**
 * Import Gulp plugins
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var watch = require('gulp-watch');

/**
 * Variables to use in the tasks
 * @var jsxPath - path of the jsx files
 * @var jsDest	- destination of the jsx file after babel
 * @var vendorPath - path of the vendor files such as react and react-dom
 */
var jsxPath = 'jsx/';
var jsDest = 'dist/';
var vendorPath = 'dist/vendor';


/**
 * Copy react and react dom to vendor destination
 */
gulp.task('copy-react', function() {
	gulp.src('node_modules/react/dist/react.min.js')
	.pipe(gulp.dest(vendorPath));
});

gulp.task('copy-react-dom', function() {
	gulp.src('node_modules/react-dom/dist/react-dom.min.js')
	.pipe(gulp.dest(vendorPath));
});

/**
 * Babel jsx files
 */
gulp.task('babel', function() {
  gulp.src(`${jsxPath}*.jsx`)
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest(jsDest))
});

/**
 * Minify files in destination to make them ready to production
 */
gulp.task('minify', function() {
	gulp.src(`${jsDest}*.js`)
	.pipe(minify({
		ext: {
			min: '.min.js'
		},
		ignoreFiles: ['*.min.js']
	}))
	.pipe(gulp.dest(jsDest));
});

/**
 * Watch changes in the jsx files
 */
gulp.task('watch', function() {
	gulp.watch(`${jsxPath}*.jsx`, ['babel']);
});

/**
 * Tasks to run when developing and deploying
 */
gulp.task('develop', ['babel', 'watch']);
gulp.task('deploy', ['copy-react', 'copy-react-dom', 'minify']);
gulp.task('default', ['deploy', 'develop']);

