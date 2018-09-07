const fs = require('fs');
const path = require('path');

const appDir = fs.realpathSync(process.cwd());

const resolveAppPath = function(relativePath) {
    return path.resolve(appDir, relativePath);
};

module.exports = {
    appHtml: resolveAppPath('public/index.html'),
    appJs: resolveAppPath('src/js'),
    appJsIndex: resolveAppPath('src/js/index.js'),
    dist: resolveAppPath('dist')
};
