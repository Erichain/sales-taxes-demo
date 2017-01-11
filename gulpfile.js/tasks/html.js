// task html
const gulp = require('gulp');
const config = require('../gulp.config');
const path = require('path');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

const paths = {
    src: path.join(
        config.root,
        config.tasks.html.src,
        `/**/*.{${config.tasks.html.extensions}}`
    ),
    dest: path.join(config.dest, config.tasks.html.dest)
};

const htmlTask = (cb) => {
    return gulp.src(paths.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
};

gulp.task('html', htmlTask);
module.exports = htmlTask;
