// build system config
module.exports = {
    root: './src',
    dest: './dist',
    entry: './src/scripts/app.js',
    tasks: {
        browserSync: {
            port: '3333',
            browser: 'Google Chrome',
            server: {
                baseDir: 'dist'
            }
        },

        scripts: {
            src: 'scripts',
            dest: 'scripts',
            babel: {
                presets: ['lastest'],
                plugins: []
            },
            extensions: ['js', 'json']
        },

        styles: {
            src: 'styles',
            dest: 'styles',
            autoprefixer: {
                browsers: ['last 3 versions']
            },
            sass: {
                intentedSyntax: true,
                includePaths: []
            },
            extensions: ['scss', 'css']
        },

        html: {
            src: './',
            dest: './',
            extensions: ['html', 'json']
        },

        vueify: {
            src: 'components',
            dest: './',
            extensions: ['vue', 'json']
        }
    }
};

