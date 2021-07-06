// app/middleware/gzip.js
const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = (options, app) => {
    return async function getIcon(ctx, next) {
        console.log(3333)
        next();

    }
}