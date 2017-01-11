// task serve
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

gulp.task('serve', (cb) => {
    gulpSequence(
        'clean',
        'vueify',
        'scripts',
        'styles',
        'html',
        'browserSync',
        cb
    );
});
