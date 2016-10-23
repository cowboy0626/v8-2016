var path = require('../path');

module.exports = {
    path: path,
    db: 'mongodb://localhost/sample',
    tokenSecret: 'sample',
    expireTime: 60*60*3
}