// task browserSync
const gulp = require('gulp');
const config = require('../gulp.config');
const path = require('path');
const browserSync = require('browser-sync').create();

const browserSyncTask = () => {
    browserSync.init(config.tasks.browserSync);

    let watchableTasks = [
        'scripts',
        'html',
        'styles'
    ];

    watchableTasks.forEach((taskName) => {
        let files = path.join(
            config.root,
            config.tasks[taskName].src,
            `/**/*.{${config.tasks[taskName].extensions}}`
        );

        if (taskName === 'scripts') {
            files = [
                path.join(
                    config.root,
                    config.tasks[taskName].src,
                    `/**/*.{${config.tasks[taskName].extensions}}`
                ),
                path.join(
                    config.root,
                    config.tasks.vueify.src,
                    `/**/*.{${config.tasks.vueify.extensions}}`
                )
            ];
        }

        let watchTaskName = `watch${taskName[0]
            .toUpperCase()
            .concat(taskName.slice(1))}`;

        gulp.task(watchTaskName, [taskName], (done) => {
                browserSync.reload();
                done();
            }
        );

        gulp.watch(files, [watchTaskName]);
    });
};

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;

