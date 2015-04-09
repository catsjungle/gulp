var gulp = require('gulp');
//var exec = require('child_process').exec;
var sass = require('gulp-ruby-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('css', function() {
  
  var cssSrc = './src/sass/test.scss',
      cssDst = './src/css/';

  return sass(cssSrc, { style: 'expanded'})
    //.on('error', function(err){ console.log(err.message); })
    .pipe(gulp.dest(cssDst));
  //exec('sass src/sass/test.scss src/css/test.css', function(error, stdout, stderr){
    //console.log('finish build sass');
  //});
});

gulp.task('js', function(){
  return gulp.src('./src/js/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'))
          .pipe(concat('main.js'))
          .pipe(gulp.dest('./dist/js'))
          .pipe(rename({ suffix: '.min'}))
          .pipe(uglify())
          .pipe(gulp.dest('./dist/js'))
});


