var gameDataUtil = require('gameDataUtil');
var GameString = require('gameString');

/**
 * @todo
 */
var ActionStruct = cc.Class({
    properties: {
        _id : Object,
        _data : Object,
        //public
        gId:{
            /**@return {string} */
            get: function(){
                return this._id;
            }
        },

        gData:{
            get:function(){
                return this._data;
            }
        }
    },

    ctor : function(){
        this._id = "";
        this._data = {};
    },
    /**
     * analyse data from json
     * @param [jsonObj]{Object}
     */
    deserialize : function(jsonObj){

        this._id = jsonObj.id;

        var actor = jsonObj[GameString.ACTOR];

        var actionType = jsonObj[GameString.TYPE];

        var actionData = jsonObj[GameString.DATA];
    },
    /**
     * generate Object
     * @return {Object}
     */
    serialize: function(){
        return null;
    }
});

module.exports = ActionStruct;