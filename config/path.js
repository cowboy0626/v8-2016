var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    root: rootPath,
    config: rootPath + '/config',
    routes: rootPath + '/server/routes',
    controllers: rootPath + '/server/controllers',
    views: rootPath + '/server/views',
    models: rootPath + '/server/models'
};

