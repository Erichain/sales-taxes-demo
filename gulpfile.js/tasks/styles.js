// task styls
const gulp = require('gulp');
const config = require('../gulp.config');
const browserSync = require('browser-sync');
const gulpSass = require('gulp-sass');
const path = require('path');
const plumber = require('gulp-plumber');

const paths = {
    src: path.join(
        config.root,
        config.tasks.styles.src,
        `/**/*.{${config.tasks.styles.extensions}}`
    ),
    dest: path.join(config.dest, config.tasks.styles.dest)
};

const stylesTask = (cb) => {
    return gulp.src(paths.src)
        .pipe(plumber())
        .pipe(gulpSass(config.tasks.styles.sass).on('error', gulpSass.logError))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
};

gulp.task('styles', stylesTask);
module.exports = stylesTask;
