var util = require('constantUtil');

var GameConstant = {
    MAX_FRAME_POOL_VALUME: 10
};

util.deepFreeze(GameConstant);

module.exports = GameConstant;
