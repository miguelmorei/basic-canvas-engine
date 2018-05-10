/* 
   This setup builds & runs your project on chrome. It compiles SCSS, minifies and concatenates files.
   It's setup to transpile ECMA Script 2015 into standard Javascript.

   Feel free to extend it for your project needs.

   Created and maintained by Miguel Moreira, Sectorlight 2017
*/
var gulp = require('gulp');

// Browser history fallback that runs with the browser sync feature
var historyApiFallback = require('connect-history-api-fallback');

// Browser Sync will run a localhost web server as well as instantly refreshing or injecting any javascript or 
// scss styles into your webpage
var browserSync = require('browser-sync');

// Gulp concat will concatenate multiple files into one
var concat = require('gulp-concat');

// Gulp-Sass provides a compiler to your SCSS files within Gulp
var sass = require('gulp-sass');

// Gulp-Uglify will minify your Gulp Stream
var uglify = require('gulp-uglify');

// When this feature is used, it will remove any debug code you still have in your code [ex. console.log(myVar), won't be
// in the compiled code]
var stripDebug = require('gulp-strip-debug');

// Along with Babel, webpack is used here to compile ES2015 code into standard Javascript
var webpack = require('webpack-stream');

// Path normalisation plugin
var path = require('path');

var jsdoc = require('gulp-jsdoc3');


// SASS compiling task
gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream : true}));
});

// Watch for any changes in SASS folder and run SASS task above
gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

var webpackConfig = {
    entry : [path.join(__dirname, "src/js/main.js")],
    output : {
        path :  path.resolve(__dirname, "js/"),
        filename: "[name].js"
    },
    module : {
        loaders : [{
            loader : 'babel-loader',
            query : {
                presets : ['env', 'flow']
            }
        }]
    },
    target : 'web'
}

// Javascript compiling and concatenating task
gulp.task('scripts', function(){

        return gulp.src(['src/js/main.js'])
            // transform the files here. 
            .pipe(webpack(webpackConfig))
            .pipe(concat('index.js'))
            .pipe(gulp.dest("js/"))
});


// Watch for any changes in Javascript src folder and run Javascript task above
gulp.task('scripts:watch', function(){

  gulp.watch(['src/js/**/*'], ['scripts']);

});


// Localhost webserver task
gulp.task('browser-sync', function() {
    browserSync({
        // we need to disable clicks and forms for when we test multiple rooms
        server : {
          baseDir : './'
        },
        middleware : [ historyApiFallback() ],
        ghostMode: false
    });
});

gulp.task('doc', function (cb) {
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});


gulp.task('build', ['sass', 'scripts']);
gulp.task('watch', ['sass', 'sass:watch', 'scripts', 'scripts:watch']);
gulp.task('default', ['browser-sync', 'sass', 'sass:watch', 'scripts', 'scripts:watch']);