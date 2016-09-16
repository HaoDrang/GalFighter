var gameDataUtil = require('gameDataUtil');
var GameString = require('gameString');

/**
 * @todo
 */
var ActionStruct = cc.Class({
    properties: {
        _attrs : Object,
        _data : Object,
        //public
        gId:{
            /**@return {string} */
            get: function(){
                if(this._attrs['id']){
                    return this._attrs.id;
                }
                return null;
            }
        },

        gData:{
            get:function(){
                return this._data;
            }
        }
    },

    ctor : function(){
        this._attrs = {};
        this._data = {};
    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){
        gameDataUtil.addPropertiesFromDom(this._attrs, xdom);

        var actorName = gameDataUtil.getFirstElementByName(xdom, GameString.ACTOR).textContent;

        var actorType = gameDataUtil.getFirstElementByName(xdom, GameString.TYPE).textContent;

        var actorData = gameDataUtil.getFirstElementByName(xdom, actorType);

        gameDataUtil.addPropertiesFromDom(this._data, actorData);

        this._data['value'] = actorData.textContent;
    },
    /**
     * generate XMLDocument
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});

module.exports = ActionStruct;