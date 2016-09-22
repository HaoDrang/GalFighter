var GameString = require('gameString');
var gameDataUtil = require('gameDataUtil');

/**
 * @todo
 */
var LinesStruct = cc.Class({
    properties: {
        //private
        _id : Object,
        _content : cc.String,

        //public
        textContent:{
            get:function(){
                return this._content;
            }
        }
    },

    ctor:function(){
        this._id = "";
        this._content = "";
    },
    /**
     * analyse data from Object
     * @param [jsonObj]{Object}
     */
    deserialize : function(jsonObj){

        this._content = jsonObj[GameString.TEXT];
    },
    /**
     * generate xml string
     * @return {Object}
     */
    serialize: function(){
        return null;
    }
});

module.exports = LinesStruct;