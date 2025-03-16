const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src') // 确保 '@' 指向项目的 src 目录
        }
    }
};