'use strict';

var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

gulp.task('minify-bower-components', function(){
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/ladda/js/spin.js',
        'bower_components/ladda/js/ladda.js',
        'bower_components/angular-ladda/dist/angular-ladda.min.js',
        'bower_components/lodash/dist/lodash.min.js',
        'bower_components/angular-google-maps/dist/angular-google-maps.min.js',
        'bower_components/angular-file-upload/angular-file-upload.min.js'
    ])
    .pipe(gp_concat('bundle.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(gp_rename('bundle-ug.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('assets/js'));
});
gulp.task('minify-css', function() {
    var opts = {comments:true,spare:true};
    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'assets/css/styles.css',
        'assets/font-awesome-4.3.0/css/font-awesome.min.css',
        'bower_components/ladda/dist/ladda-themeless.min.css'
    ])
    .pipe(minifyCSS(opts))
    .pipe(gp_rename({ extname: '.min.css' }))
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('default', ['minify-bower-components', 'minify-css'], function(){});