var GameString = require('gameString');
var gameDataUtil = require('gameDataUtil');

/**
 * @todo
 */
var LinesStruct = cc.Class({
    properties: {
        //private
        _attrs : Object,
        _content : cc.String,

        //public
        textContent:{
            get:function(){
                return this._content;
            }
        }
    },

    ctor:function(){
        this._attrs = {};
        this._content = "";
    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){
        gameDataUtil.addPropertiesFromDom(this._attrs, xdom);

        this._content = gameDataUtil.convertLines(xdom.textContent);
    },
    /**
     * generate xml string
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});

module.exports = LinesStruct;