// task clean
const gulp = require('gulp');
const config = require('../gulp.config');
const del = require('del');

const cleanTask = (cb) => {
    del([config.dest]).then((paths) => {
        cb();
    });
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;
