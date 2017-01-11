// root tasks
const requireDir = require('require-dir');

// require all the tasks
requireDir('./tasks', {
    recurse: true
});