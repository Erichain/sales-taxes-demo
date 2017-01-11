// task scripts
const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../gulp.config');
const path = require('path');
const browserify = require('browserify');
const babelify = require('babelify');
const vueify = require('vueify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const plumber = require('gulp-plumber');

const paths = {
    src: path.join(
        config.root,
        config.tasks.scripts.src,
        `/**/*.{${config.tasks.scripts.extensions}}`
    ),
    dest: path.join(config.dest, config.tasks.scripts.dest)
};

const scriptsTask = (cb) => {
    const bundler = browserify({
        entries: config.entry,
        debug: true,
        transform: [vueify, babelify]
    });

    return bundler.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(plumber())
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
};

gulp.task('scripts', scriptsTask);
module.exports = scriptsTask;
