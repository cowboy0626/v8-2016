var path = require('../path');

module.exports = {
    path: path,
    db: 'mongodb://sample:sample@ds061206.mlab.com:61206/heroku_d3t20krv',
    tokenSecret: 'sample',
    expireTime: 60*60*3
}