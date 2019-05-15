const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      imagemin = require('gulp-imagemin'),
      concat = require('gulp-concat'),
      sass =require('gulp-sass'),
      cssnano =require('gulp-cssnano');

gulp.task('css',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(cssnano())
    .pipe(rename({'suffix' : '.min'}))
    .pipe(gulp.dest('./dist/css'))
})
gulp.task('img',function(){
    gulp.src('./src/img/*.*')
     .pipe(imagemin())
     .pipe(gulp.dest('./dist/img'))
})
gulp.task('autocss',function(){
    gulp.watch('./src/sass/*.scss',['css']);
})