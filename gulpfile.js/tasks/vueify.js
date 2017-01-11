// task vueify
const gulp = require('gulp');
const config = require('../gulp.config');
const path = require('path');
const browserSync = require('browser-sync');
const vueify = require('vueify');
const plumber = require('gulp-plumber');

const paths = {
    src: path.join(
        config.root,
        config.tasks.vueify.src,
        `/**/*.{${config.tasks.vueify.extensions}}`
    ),
    dest: path.join(config.dest, config.tasks.vueify.dest)
};

const vueTask = (cb) => {
    return gulp.src(paths.src)
        .pipe(plumber())
        .pipe(vueify())
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream());
};

gulp.task('vueify', ['scripts'], vueTask);
module.exports = vueTask;
