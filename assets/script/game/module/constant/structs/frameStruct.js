var GameString = require('gameString');
var gameDataUtil = require('gameDataUtil');
var ActionStruct = require('actionStruct');
var LinesStruct = require('linesStruct');

/**
 * @todo
 */
var FrameStruct = cc.Class({
    properties: {
        _attrs : Object,
        _actions : Array,
        _lines : Object,
        //public
        gId:{
            /**@return {string} */
            get: function(){
                if(this._attrs['id']){
                    return this._attrs.id;
                }
                return null;
            }
        }
    },

    ctor: function(){
        this._attrs = {};
        this._lines = {};
        this._actions = [];
    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

        gameDataUtil.addPropertiesFromDom(this._attrs, xdom);

        var actionsDom = gameDataUtil.getFirstElementByName(xdom, GameString.ACTIONS);

        if(!actionsDom){
            return;
        }

        var actionsNodeList = actionsDom.getElementsByTagName(GameString.ACTION);

        if(!actionsNodeList){
            return;
        }

        for(var i = 0; i < actionsNodeList.length; i++){

            var actionDom = actionsNodeList.item(i);

            if(!actionDom){
                continue;
            }

            var action = new ActionStruct();

            action.deserialize(actionDom);

            this._actions.push(action);
        }

        var linesDom = gameDataUtil.getFirstElementByName(xdom, GameString.LINES);
        
        this._lines = new LinesStruct();

        this._lines.deserialize(linesDom);
    },
    /**
     * generate XMLDocument
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});

module.exports = FrameStruct;